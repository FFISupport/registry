"use client";

import { motion } from "motion/react";
import type { Dispatch } from "react";
import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";
import type { AppFileRouter } from "@/utils/server/upload";

interface ModalProps {
    setShowModal: Dispatch<boolean>;
}

export const UploadModal = ({ setShowModal }: ModalProps) => {
    const handleBackdropClose = () => {
        setShowModal(false);
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
                <UTUploadDropzone endpoint="pdfUpload" />
                <UTUploadButton endpoint="pdfUpload" />
            </motion.div>
        </div>
    );
};

export const UTUploadButton = generateUploadButton<AppFileRouter>({
    url: "/api/upload",
});
export const UTUploadDropzone = generateUploadDropzone<AppFileRouter>({
    url: "/api/upload",
});
