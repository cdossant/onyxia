import { z } from "zod";
import { assert, type Equals } from "tsafe/assert";
import type { Language } from "core";
import { COUNTRY_LANG } from "core/ports/OnyxiaApi/Language";
import type { LocalizedString } from "./i18n";

//List the languages you with to support
export const languages = [
    COUNTRY_LANG.ENGLAND,
    COUNTRY_LANG.FRANCE,
    COUNTRY_LANG.CHINA,
    COUNTRY_LANG.NORWAY,
    COUNTRY_LANG.FINLAND,
    COUNTRY_LANG.NEITHERLAND,
    COUNTRY_LANG.ITALY,
    COUNTRY_LANG.GERMANY
] as const;

assert<Equals<(typeof languages)[number], Language>>();

export const zLanguage = z.union([
    z.literal(COUNTRY_LANG.ENGLAND),
    z.literal(COUNTRY_LANG.FRANCE),
    z.literal(COUNTRY_LANG.CHINA),
    z.literal(COUNTRY_LANG.NORWAY),
    z.literal(COUNTRY_LANG.FINLAND),
    z.literal(COUNTRY_LANG.NEITHERLAND),
    z.literal(COUNTRY_LANG.ITALY),
    z.literal(COUNTRY_LANG.GERMANY)
]);

{
    type Got = ReturnType<(typeof zLanguage)["parse"]>;
    type Expected = Language;

    assert<Equals<Got, Expected>>();
}

export const zLocalizedString = z.union([z.string(), z.record(zLanguage, z.string())]);

{
    type Got = ReturnType<(typeof zLocalizedString)["parse"]>;
    type Expected = LocalizedString;

    assert<Equals<Got, Expected>>();
}
