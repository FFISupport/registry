const utUrlFromEnv = process.env.NEXT_PUBLIC_UT_BASE_URL;

if (utUrlFromEnv == undefined)
    throw new Error(
        "NEXT_PUBLIC_UT_BASE_URL not set. Please set ensure that you've set up the environment variables appropriately.",
    );

export const UT_BASE_URL = utUrlFromEnv;
