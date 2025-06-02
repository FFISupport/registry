"use client";

import type { ClientFile } from "@/utils/types/client";
import { LucideEyeOpen } from "@/components/Icons/LucideEye";

interface ItemProps {
    file: ClientFile;
}

export const FileItem = ({ file }: ItemProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <p>{file.name}</p>
                <a
                    href={`/file/${file.blobKey}`}
                    className="dark:text-ctp-mauve text-ctp-l-mauve cursor-pointer"
                >
                    <LucideEyeOpen />
                </a>
                {/*<a*/}
                {/*    className="dark:text-ctp-blue text-ctp-l-blue cursor-pointer"*/}
                {/*    download*/}
                {/*    href={`/file/${file.blobKey}`}*/}
                {/*>*/}
                {/*    <LucideDownload />*/}
                {/*</a>*/}
            </div>
            {/*{showFileEmbed && (*/}
            {/*    <AnimatePresence>*/}
            {/*        <embed src={file.blobUrl} className="h-326 w-256" />*/}
            {/*    </AnimatePresence>*/}
            {/*)}*/}
        </div>
    );
};
