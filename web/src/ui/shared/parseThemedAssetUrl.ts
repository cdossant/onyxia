import { z } from "zod";
import { assert, type Equals } from "tsafe/assert";
import { is } from "tsafe/is";
import type { ThemedAssetUrl } from "onyxia-ui";
import { getIsJSON5ObjectOrArray } from "ui/tools/getIsJSON5ObjectOrArray";
import JSON5 from "json5";

const zUrl = z.string().superRefine((data, ctx) => {
    if (!/\.(svg)|(png)|(jpg)|(jpeg)|(webp)|(ico)$/i.test(data)) {
        ctx.addIssue({
            "code": z.ZodIssueCode.custom,
            "message": `Your ThemedAssetUrl should point to an image file. Got: ${data}`
        });
    }
});

export const zAssetVariantUrl = z.union([
    zUrl,
    z.object({
        "light": zUrl,
        "dark": zUrl
    })
]);

{
    type Got = ReturnType<(typeof zAssetVariantUrl)["parse"]>;
    type Expected = ThemedAssetUrl;

    // NOTE: This is too much for Equals so we lock it this way.
    assert<Equals<Got, Expected>>();
}

/** Throw an error if parsing fails */
export function parseThemedAssetUrl(serializedAssetVariantUrl: string): ThemedAssetUrl {
    if (serializedAssetVariantUrl === "") {
        throw new Error("Empty string is not a valid AssetVariantUrl");
    }

    if (!getIsJSON5ObjectOrArray(serializedAssetVariantUrl)) {
        return serializedAssetVariantUrl;
    }

    let assetVariantUrl: unknown;

    try {
        assetVariantUrl = JSON5.parse(serializedAssetVariantUrl);
    } catch {
        throw new Error(`${serializedAssetVariantUrl} is not a valid JSON`);
    }

    try {
        zAssetVariantUrl.parse(assetVariantUrl);
    } catch (error) {
        throw new Error(
            `${serializedAssetVariantUrl} is not a valid AssetVariantUrl: ${String(
                error
            )}`
        );
    }
    assert(is<ThemedAssetUrl>(assetVariantUrl));

    return assetVariantUrl;
}
