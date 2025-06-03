"use client";

import { LucidePlus } from "@/components/Icons/LucidePlus";
import { AnimatedButton } from "@/components/Animated/AnimatedButton";
import { useState } from "react";

export const UploadNavButton = () => {
    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <AnimatedButton className="bg-ctp-l-green dark:bg-ctp-green flex cursor-pointer items-center justify-center gap-1 rounded-lg p-2">
            <LucidePlus className="dark:text-ctp-crust text-ctp-l-crust" />
            <p className="dark:text-ctp-crust text-ctp-l-crust text-sm">New</p>
        </AnimatedButton>
        <div className="">
            <AnimatedButton
                className="bg-ctp-l-green dark:bg-ctp-green flex cursor-pointer items-center justify-center gap-1 rounded-lg p-2"
                onClick={handleClick}
            >
                <LucidePlus className="dark:text-ctp-crust text-ctp-l-crust" />
                <p className="dark:text-ctp-crust text-ctp-l-crust text-sm">
                    New
                </p>
            </AnimatedButton>
        </div>
    );
};
