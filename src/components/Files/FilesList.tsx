"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { FilesResponse, SuccessResponse } from "@/utils/types/responses";
import { Loading } from "@/components/Icons/Loading";
import type { ClientFile } from "@/utils/types/client";
import { FileItem } from "@/components/Files/FileItem";

export const FilesList = () => {
    const queryClient = useQueryClient();

    const getFiles = async () => {
        const req = new Request("/api/files", {
            method: "GET",
        });
        const { data } = (await (await fetch(req)).json()) as SuccessResponse;
        return data;
    };

    const { data: files, isPending } = useQuery({
        queryFn: getFiles,
        queryKey: ["files"],
    });

    return (
        <div className="flex flex-col items-center gap-2">
            {isPending ? (
                <Loading />
            ) : (
                files?.map((file: ClientFile) => {
                    return <FileItem file={file} key={file.name} />;
                })
            )}
        </div>
    );
};
