import type { FileRouter } from "uploadthing/next";
import { createUploadthing } from "uploadthing/next";
import db from "@/db";
import { filesTable } from "@/db/schema/files";

const f = createUploadthing();

export const appFileRouter: FileRouter = {
    pdfUpload: f({
        pdf: {
            maxFileSize: "4MB",
            maxFileCount: 1,
        },
    })
        .middleware(() => {
            // TODO: actually perform the auth here
            return { uploadedBy: "Registry" };
        })
        .onUploadComplete(async ({ file }) => {
            await db.insert(filesTable).values({
                name: file.name,
                blobKey: file.key,
            });

            return { success: true, fileUrl: file.ufsUrl };
        }),
};

export type AppFileRouter = typeof appFileRouter;
