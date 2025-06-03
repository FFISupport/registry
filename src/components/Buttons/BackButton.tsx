"use client";

import { useRouter } from "next/navigation";
import { LucideCornerDownLeft } from "@/components/Icons/LucideCornerDownLeft";
import {
    AnimatedUnderline,
    AnimatedUnderlineColour,
} from "@/components/Animated/AnimatedUnderline";

export const BackButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="cursor-pointer p-4 pl-6"
        >
            <AnimatedUnderline colour={AnimatedUnderlineColour.SKY}>
                <div className="flex items-center gap-2">
                    <LucideCornerDownLeft className="dark:text-ctp-sky text-ctp-l-sky" />
                    <p>Back</p>
                </div>
            </AnimatedUnderline>
        </button>
    );
};
