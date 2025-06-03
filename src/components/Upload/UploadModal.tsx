"use client";

import { motion } from "motion/react";
import type { Dispatch } from "react";
import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";
import type { AppFileRouter } from "@/utils/server/upload";
import { useQueryClient } from "@tanstack/react-query";

interface ModalProps {
    setShowModal: Dispatch<boolean>;
}

export const UploadModal = ({ setShowModal }: ModalProps) => {
    const handleBackdropClose = () => {
        setShowModal(false);
    };

    const queryClient = useQueryClient();

    const handleClientUploadComplete = async () => {
        handleBackdropClose();
        await queryClient.invalidateQueries({
            queryKey: ["files"],
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center">
            <motion.div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={handleBackdropClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
                className="z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
                <UTUploadDropzone
                    endpoint="pdfUpload"
                    onClientUploadComplete={handleClientUploadComplete}
                    className="dark:bg-ctp-base bg-ctp-l-base ut-button:dark:bg-ctp-sky ut-button:dark:text-ctp-crust ut-label:dark:text-ctp-text ut-allowed-content:dark:text-ctp-subtext-0 dark:outline-ctp-sky ut-button:bg-ctp-l-sky ut-button:text-ctp-l-crust ut-label:text-ctp-l-text ut-allowed-content:text-ctp-l-subtext-0 outline-ctp-l-sky ut-upload-icon:text-ctp-l-sky ut-upload-icon:dark:text-ctp-sky outline-2 outline-dashed"
                />
            </motion.div>
        </div>
    );
};

export const UTUploadDropzone = generateUploadDropzone<AppFileRouter>({
    url: "/api/upload",
});
