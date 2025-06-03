"use client";

import { LucidePlus } from "@/components/Icons/LucidePlus";
import { AnimatedButton } from "@/components/Animated/AnimatedButton";
import { useState } from "react";
import { UploadModal } from "@/components/Upload/UploadModal";

export const UploadNavButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <div className="">
            {showModal && <UploadModal />}
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
