import { motion } from "motion/react";
import type { MouseEventHandler, ReactNode } from "react";

export interface AnimButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Reusable animated button component. Use this in place of a normal <button> div whenever you need to apply default animations to it.
 * @param children - Provide it within markup. DO NOT pass this as an inline prop. This component should wrap other components to create the button.
 * @param className - CSS class name(s) in string
 * @param onClick - On click handler
 */

export const AnimatedButton = ({
    children,
    className,
    onClick,
}: AnimButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={className}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};
