"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { CatppuccinBackgroundColour } from "@/utils/styles/catppuccin";

interface AnimatedUnderlineProps {
    children: ReactNode;
    colour?: CatppuccinBackgroundColour;
}

/**
 * Reusable animated underline component. Use this whenever you need to apply an animated underline to a component like in a link or markup.
 * @param children - Provide it within markup. DO NOT pass this as an inline prop. This component should wrap other components to create the button.
 * @param colour - Enum of colours. Defaults to Text
 * @constructor
 */
export const AnimatedUnderline = ({
    children,
    colour = CatppuccinBackgroundColour.TEXT,
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
