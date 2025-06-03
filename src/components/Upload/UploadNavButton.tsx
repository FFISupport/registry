"use client";

import { LucidePlus } from "@/components/Icons/LucidePlus";
import { AnimatedButton } from "@/components/Animated/AnimatedButton";

export const UploadNavButton = () => {
    return (
        <AnimatedButton className="bg-ctp-l-green dark:bg-ctp-green flex cursor-pointer items-center justify-center gap-1 rounded-lg p-2">
            <LucidePlus className="dark:text-ctp-crust text-ctp-l-crust" />
            <p className="dark:text-ctp-crust text-ctp-l-crust text-sm">New</p>
        </AnimatedButton>
    );
};
