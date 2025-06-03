"use client";

import { useRouter } from "next/navigation";
import { LucideCornerDownLeft } from "@/components/Icons/LucideCornerDownLeft";
import { motion } from "motion/react";

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
            <motion.div
                className="relative inline-block"
                initial="initial"
                whileHover="hover"
            >
                <div className="flex items-center gap-2">
                    <LucideCornerDownLeft className="dark:text-ctp-sky text-ctp-l-sky" />
                    <p>Back</p>
                </div>
                <motion.span
                    className="dark:bg-ctp-sky bg-ctp-l-sky absolute bottom-0 left-0 h-0.25 w-full origin-center"
                    variants={{
                        initial: { scaleX: 0 },
                        hover: { scaleX: 1 },
                    }}
                    transition={{
                        type: "spring",
                        duration: 0.25,
                        bounce: 0.3,
                    }}
                />
            </motion.div>
        </button>
    );
};
