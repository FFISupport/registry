"use client";

import { LucidePlus } from "@/components/Icons/LucidePlus";
import { AnimatedButton } from "@/components/Animated/AnimatedButton";
import { useState } from "react";
import { UploadModal } from "@/components/Upload/UploadModal";
import { AnimatePresence } from "motion/react";

export const UploadNavButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <div className="">
            <AnimatePresence initial={false}>
                {showModal && <UploadModal setShowModal={setShowModal} />}
            </AnimatePresence>
            <AnimatedButton
                className="bg-ctp-l-green dark:bg-ctp-green flex cursor-pointer items-center justify-center gap-1 rounded-lg p-2"
                onClick={handleClick}
            >
                <LucidePlus className="dark:text-ctp-crust text-white" />
                <p className="dark:text-ctp-crust text-sm text-white">New</p>
            </AnimatedButton>
        </div>
    );
};
