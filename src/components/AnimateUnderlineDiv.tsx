import { motion } from "motion/react";
import type { FC, ReactNode } from "react";

interface AnimatedDivProps {
    children: ReactNode;
    className?: string;
}

export const AnimatedUnderlineDiv: FC<AnimatedDivProps> = ({
    children,
    className,
}) => {
    return (
        <motion.div
            className={`relative inline-block ${className ?? ""}`}
            initial="initial"
            whileHover="hover"
        >
            {children}
            <motion.span
                className="dark:bg-ctp-blue bg-ctp-l-blue absolute bottom-1 left-0 h-0.25 w-full origin-center"
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
