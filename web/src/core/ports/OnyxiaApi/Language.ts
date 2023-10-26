import type { LocalizedString as GenericLocalizedString } from "i18nifty";

export enum COUNTRY_LANG {
    ENGLAND = "en",
    FRANCE = "fr",
    CHINA = "zh-CN",
    NORWAY = "no",
    FINLAND = "fi",
    NEITHERLAND = "nl",
    ITALY = "it",
    GERMANY = "de"
}

export type Language =
    | COUNTRY_LANG.ENGLAND
    | COUNTRY_LANG.FRANCE
    | COUNTRY_LANG.CHINA
    | COUNTRY_LANG.NORWAY
    | COUNTRY_LANG.FINLAND
    | COUNTRY_LANG.NEITHERLAND
    | COUNTRY_LANG.ITALY
    | COUNTRY_LANG.GERMANY;

export type LocalizedString = GenericLocalizedString<Language>;

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

export interface LanguageInfos {
    label: string;
    dateFormat(isSameYear: boolean): string;
    unitLabel(unit: UnitKey): {
        past1: string;
        pastN: string;
        future1: string;
        futureN: string;
    };
}

type LanguagesInfos = Record<COUNTRY_LANG, LanguageInfos>;

export const Languages: LanguagesInfos = {
    [COUNTRY_LANG.ENGLAND]: {
        label: "English",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "a minute ago",
                        "pastN": "# minutes ago",
                        "future1": "in a minute",
                        "futureN": "in # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
        }
    },
    [COUNTRY_LANG.FRANCE]: {
        label: "Français",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "il y a une minute",
                        "pastN": "il y a # minutes",
                        "future1": "dans une minute",
                        "futureN": "dans # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
            return {
                "past1": "",
                "pastN": "",
                "future1": "",
                "futureN": ""
            };
        }
    },
    [COUNTRY_LANG.CHINA]: {
        label: "简体中文",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "a minute ago",
                        "pastN": "# minutes ago",
                        "future1": "in a minute",
                        "futureN": "in # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
            return {
                "past1": "",
                "pastN": "",
                "future1": "",
                "futureN": ""
            };
        }
    },
    [COUNTRY_LANG.NORWAY]: {
        label: "Norsk",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "a minute ago",
                        "pastN": "# minutes ago",
                        "future1": "in a minute",
                        "futureN": "in # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
            return {
                "past1": "",
                "pastN": "",
                "future1": "",
                "futureN": ""
            };
        }
    },
    [COUNTRY_LANG.FINLAND]: {
        label: "Suomi",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "a minute ago",
                        "pastN": "# minutes ago",
                        "future1": "in a minute",
                        "futureN": "in # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
            return {
                "past1": "",
                "pastN": "",
                "future1": "",
                "futureN": ""
            };
        }
    },
    [COUNTRY_LANG.NEITHERLAND]: {
        label: "Nederlands",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "a minute ago",
                        "pastN": "# minutes ago",
                        "future1": "in a minute",
                        "futureN": "in # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
            return {
                "past1": "",
                "pastN": "",
                "future1": "",
                "futureN": ""
            };
        }
    },
    [COUNTRY_LANG.ITALY]: {
        label: "Italiano",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "a minute ago",
                        "pastN": "# minutes ago",
                        "future1": "in a minute",
                        "futureN": "in # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
            return {
                "past1": "",
                "pastN": "",
                "future1": "",
                "futureN": ""
            };
        }
    },
    [COUNTRY_LANG.GERMANY]: {
        label: "Deutsch",
        dateFormat(isSameYear) {
            return `dddd Do MMMM${isSameYear ? "" : " YYYY"} à H[h]mm`;
        },
        unitLabel(unit) {
            switch (unit) {
                case "INSTANTLY":
                    return {
                        "past1": "just now",
                        "pastN": "just now",
                        "future1": "just now",
                        "futureN": "just now"
                    } as const;
                case "IN_SECOND":
                    return {
                        "past1": "a second ago",
                        "pastN": "# seconds ago",
                        "future1": "in a second",
                        "futureN": "in # seconds"
                    } as const;
                case "IN_MINUTE":
                    return {
                        "past1": "a minute ago",
                        "pastN": "# minutes ago",
                        "future1": "in a minute",
                        "futureN": "in # minutes"
                    } as const;
                case "IN_HOUR":
                    return {
                        "past1": "an hour ago",
                        "pastN": "# hours ago",
                        "future1": "in an hour",
                        "futureN": "in # hours"
                    } as const;
                case "IN_DAY":
                    return {
                        "past1": "yesterday",
                        "pastN": "# days ago",
                        "future1": "tomorrow",
                        "futureN": "in # days"
                    } as const;
                case "IN_WEEK":
                    return {
                        "past1": "last week",
                        "pastN": "# weeks ago",
                        "future1": "in a week",
                        "futureN": "in # weeks"
                    } as const;
                case "IN_MONTH":
                    return {
                        "past1": "last month",
                        "pastN": "# months ago",
                        "future1": "in a month",
                        "futureN": "in # months"
                    } as const;
                case "IN_YEAR":
                    return {
                        "past1": "last year",
                        "pastN": "# years ago",
                        "future1": "in a year",
                        "futureN": "in # years"
                    } as const;
                case "IN_CENTUARY":
                    return {
                        "past1": "last century",
                        "pastN": "# centuries ago",
                        "future1": "in a century",
                        "futureN": "in # centuries"
                    } as const;
                case "IN_MILLENIUM":
                    return {
                        "past1": "last millennium",
                        "pastN": "# millennia ago",
                        "future1": "in a millennium",
                        "futureN": "in # millennia"
                    } as const;
            }
            return {
                "past1": "",
                "pastN": "",
                "future1": "",
                "futureN": ""
            };
        }
    }
};
