"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedUnderlineProps {
    children: ReactNode;
    colour?: AnimatedUnderlineColour;
}

export enum AnimatedUnderlineColour {
    ROSEWATER = "dark:bg-ctp-rosewater bg-ctp-l-rosewater",
    FLAMINGO = "dark:bg-ctp-flamingo bg-ctp-l-flamingo",
    PINK = "dark:bg-ctp-pink bg-ctp-l-pink",
    MAUVE = "dark:bg-ctp-mauve bg-ctp-l-mauve",
    RED = "dark:bg-ctp-red bg-ctp-l-red",
    MAROON = "dark:bg-ctp-maroon bg-ctp-l-maroon",
    PEACH = "dark:bg-ctp-peach bg-ctp-l-peach",
    YELLOW = "dark:bg-ctp-yellow bg-ctp-l-yellow",
    GREEN = "dark:bg-ctp-green bg-ctp-l-green",
    TEAL = "dark:bg-ctp-teal bg-ctp-l-teal",
    SKY = "dark:bg-ctp-sky bg-ctp-l-sky",
    SAPPHIRE = "dark:bg-ctp-sapphire bg-ctp-l-sapphire",
    BLUE = "dark:bg-ctp-blue bg-ctp-l-blue",
    LAVENDER = "dark:bg-ctp-lavender bg-ctp-l-lavender",
    TEXT = "dark:bg-ctp-text bg-ctp-l-text",
}

/**
 * Reusable animated underline component. Use this whenever you need to apply an animated underline to a component like in a link or markup.
 * @param children - Provide it within markup. DO NOT pass this as an inline prop. This component should wrap other components to create the button.
 * @param colour - Enum of colours. Defaults to Text
 * @constructor
 */
export const AnimatedUnderline = ({
    children,
    colour = AnimatedUnderlineColour.TEXT,
}: AnimatedUnderlineProps) => {
    return (
        <motion.div
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
        >
            {children}
            <motion.span
                className={`${colour} absolute bottom-0 left-0 h-0.25 w-full origin-center`}
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
    );
};
