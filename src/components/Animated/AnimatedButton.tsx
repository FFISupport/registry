import { motion } from "motion/react";
import type { ReactNode } from "react";

export interface AnimButtonProps {
    children: ReactNode;
    className?: string;
}

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
