import { motion } from "motion/react";
import type { ReactNode } from "react";

export interface AnimButtonProps {
    children: ReactNode;
    className?: string;
}

/**
 * Reusable animated button component. Use this in place of a normal <button> div whenever you need to apply default animations to it.
 * @param children - Provide it within markup. DO NOT pass this as an inline prop. This component should wrap other components to create the button.
 * @param className - CSS class name(s) in string
 */

export const AnimatedButton = ({ children, className }: AnimButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={className}
        >
            {children}
        </motion.button>
    );
};
