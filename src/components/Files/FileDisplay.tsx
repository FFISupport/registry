"use client";

import type { FileResponse, SuccessResponse } from "@/utils/types/responses";
import { useQuery } from "@tanstack/react-query";
import { UT_BASE_URL } from "@/utils/consts";
import { Loading } from "@/components/Icons/Loading";

interface DisplayProps {
    blobKey: string;
}

export const FileDisplay = ({ blobKey }: DisplayProps) => {
    const getFile = async () => {
        const req = new Request(`/api/files?blobKey=${blobKey}`, {
            method: "GET",
        });
        const { data } = (await (await fetch(req)).json()) as SuccessResponse;
        return data as FileResponse;
    };

    const { data: file, isPending } = useQuery({
        queryFn: getFile,
        queryKey: ["files"],
    });

    return (
        <div className="flex flex-col items-center gap-4 pt-6">
            {isPending ? (
                <Loading />
            ) : (
                <h1 className="text-2xl font-bold">{file?.name}</h1>
            )}
            <embed src={`${UT_BASE_URL}/${blobKey}`} className="h-326 w-256" />
        </div>
    );
};
