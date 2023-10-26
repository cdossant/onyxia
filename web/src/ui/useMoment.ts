import { useMemo, useEffect, useReducer } from "react";
import moment from "moment";
import "moment/locale/fr";
import { useLang } from "./i18n";
import { assert } from "tsafe/assert";
import type { Language } from "./i18n";
import { Languages } from "core/ports/OnyxiaApi/Language";

export const { getFormattedDate } = (() => {
    function getFormattedDate(params: { time: number; lang: Language }): string {
        const { time, lang } = params;

        const date = new Date(time);

        const isSameYear = date.getFullYear() === new Date().getFullYear();

        return moment(date).locale(lang).format(Languages[lang].dateFormat(isSameYear));
    }

    return { getFormattedDate };
})();

export function useFormattedDate(params: { time: number }): string {
    const { time } = params;

    const { lang } = useLang();

    return useMemo(() => getFormattedDate({ time, lang }), [time, lang]);
}

export function useValidUntil(params: { millisecondsLeft: number }): string {
    const { millisecondsLeft } = params;

    const { lang } = useLang();

    const validUntil = useMemo(
        () =>
            moment()
                .locale(lang)
                .add(millisecondsLeft, "milliseconds")
                .calendar()
                .toLowerCase(),

        [lang, millisecondsLeft]
    );

    return validUntil;
}

export type UnitKey =
    | "INSTANTLY"
    | "IN_SECOND"
    | "IN_MINUTE"
    | "IN_HOUR"
    | "IN_DAY"
    | "IN_WEEK"
    | "IN_MONTH"
    | "IN_YEAR"
    | "IN_CENTUARY"
    | "IN_MILLENIUM";

function convert2Units(lang: Language, unitKey: UnitKey) {
    let units = {};
    const test = (() => {
        units = (() => {
            return import("./i18n/resources/" + lang)
                .then(({ momentTranslations }) => momentTranslations)
                .then(u => u[unitKey])
                .then(x => x);
        })();
        return units;
    })();
    console.log(test);
    console.log(units);
    const infos = Languages[lang];
    return infos.unitLabel(unitKey);
}

export const { fromNow } = (() => {
    const { getUnits } = (() => {
        const SECOND = 1000;
        const MINUTE = 60 * SECOND;
        const HOUR = 60 * MINUTE;
        const DAY = 24 * HOUR;
        const WEEK = 7 * DAY;
        const MONTH = 30 * DAY;
        const YEAR = 365 * DAY;

        type Unit = {
            max: number;
            divisor: number;
            past1: string;
            pastN: string;
            future1: string;
            futureN: string;
        };

        function getUnits(params: { lang: Language }): Unit[] {
            const { lang } = params;

            return [
                {
                    "max": 4 * SECOND,
                    "divisor": 1,
                    ...convert2Units(lang, "INSTANTLY")
                },
                {
                    "max": MINUTE,
                    "divisor": SECOND,
                    ...convert2Units(lang, "IN_SECOND")
                },
                {
                    "max": HOUR,
                    "divisor": MINUTE,
                    ...convert2Units(lang, "IN_MINUTE")
                },
                {
                    "max": DAY,
                    "divisor": HOUR,
                    ...convert2Units(lang, "IN_HOUR")
                },
                {
                    "max": WEEK,
                    "divisor": DAY,
                    ...convert2Units(lang, "IN_DAY")
                },
                {
                    "max": 4 * WEEK,
                    "divisor": WEEK,
                    ...convert2Units(lang, "IN_WEEK")
                },
                {
                    "max": YEAR,
                    "divisor": MONTH,
                    ...convert2Units(lang, "IN_MONTH")
                },
                {
                    "max": 100 * YEAR,
                    "divisor": YEAR,
                    ...convert2Units(lang, "IN_YEAR")
                },
                {
                    "max": 1000 * YEAR,
                    "divisor": 100 * YEAR,
                    ...convert2Units(lang, "IN_CENTUARY")
                },
                {
                    "max": Infinity,
                    "divisor": 1000 * YEAR,
                    ...convert2Units(lang, "IN_MILLENIUM")
                }
            ];
        }
        return { getUnits };
    })();

    function fromNow(params: { dateTime: number; lang: Language }): string {
        const { dateTime, lang } = params;

        const diff = Date.now() - dateTime;
        const diffAbs = Math.abs(diff);
        for (const unit of getUnits({ lang })) {
            if (diffAbs < unit.max) {
                const isFuture = diff < 0;
                const x = Math.round(Math.abs(diff) / unit.divisor);
                if (x <= 1) return isFuture ? unit.future1 : unit.past1;
                return (isFuture ? unit.futureN : unit.pastN).replace("#", `${x}`);
            }
        }
        assert(false);
    }

    return { fromNow };
})();

export function useFromNow(params: { dateTime: number }) {
    const { dateTime } = params;

    const [trigger, forceUpdate] = useReducer(n => n + 1, 0);

    useEffect(() => {
        const timer = setInterval(() => forceUpdate(), 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const { lang } = useLang();

    const fromNowText = useMemo(
        () => fromNow({ dateTime, lang }),

        [lang, trigger, dateTime]
    );

    return { fromNowText };
}
