import {
    createI18nApi,
    declareComponentKeys,
    LocalizedString as GenericLocalizedString
} from "i18nifty";
import { fallbackLanguage, type Language } from "./types";
import { ComponentKey } from "./types";
import { statefulObservableToStatefulEvt } from "powerhooks/tools/StatefulObservable/statefulObservableToStatefulEvt";
import { getEnabledLanguages } from "ui/env";
import { COUNTRY_LANG } from "core/ports/OnyxiaApi/Language";
export { declareComponentKeys };

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString,
    useIsI18nFetching
} = createI18nApi<ComponentKey>()(
    {
        "languages": getEnabledLanguages(),
        fallbackLanguage
    },
    {
        [COUNTRY_LANG.ENGLAND]: () =>
            import("./resources/en").then(({ translations }) => translations),
        [COUNTRY_LANG.FRANCE]: () =>
            import("./resources/fr").then(({ translations }) => translations),
        [COUNTRY_LANG.CHINA]: () =>
            import("./resources/zh-CN").then(({ translations }) => translations),
        [COUNTRY_LANG.NORWAY]: () =>
            import("./resources/no").then(({ translations }) => translations),
        [COUNTRY_LANG.FINLAND]: () =>
            import("./resources/fi").then(({ translations }) => translations),
        [COUNTRY_LANG.NEITHERLAND]: () =>
            import("./resources/nl").then(({ translations }) => translations),
        [COUNTRY_LANG.ITALY]: () =>
            import("./resources/it").then(({ translations }) => translations),
        [COUNTRY_LANG.GERMANY]: () =>
            import("./resources/de").then(({ translations }) => translations)
    }
);

export type LocalizedString = GenericLocalizedString<Language>;

export const evtLang = statefulObservableToStatefulEvt({
    "statefulObservable": $lang
});
