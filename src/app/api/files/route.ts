import { StatusType } from "@/utils/types/responses";
import { newErrorResponse, newSuccessResponse } from "@/utils/server/responses";
import db from "@/db";
import {
    filesSelectSchema,
    filesSelectSchemaArray,
    filesTable,
} from "@/db/schema/files";
import { GeneralErrorType } from "@/utils/types/errors";
import { eq } from "drizzle-orm";

export const GET = async (req: Request) => {
    const params = new URL(req.url).searchParams;
    const blobKey = params.get("blobKey");

    if (blobKey) {
        const file = await db.query.filesTable.findFirst({
            where: eq(filesTable.blobKey, blobKey),
        });

        const { success, data, error } = filesSelectSchema.safeParse(file);

        if (!success) {
            return newErrorResponse(500, {
                status: StatusType.ERROR,
                error: {
                    message:
                        "Something went wrong on our side. Please try again later.",
                    details: error,
                    type: GeneralErrorType.TYPE_ERROR,
                },
            });
        }

        return newSuccessResponse(data);
    }

    const files = await db.query.filesTable.findMany();

    const { success, data, error } = filesSelectSchemaArray.safeParse(files);

    if (!success) {
        return newErrorResponse(500, {
            status: StatusType.ERROR,
            error: {
                message:
                    "Something went wrong on our side. Please try again later.",
                details: error,
                type: GeneralErrorType.TYPE_ERROR,
            },
        });
    }

    return newSuccessResponse(data);
};
