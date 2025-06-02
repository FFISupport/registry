import { StatusType } from "@/utils/types/responses";
import { newErrorResponse, newSuccessResponse } from "@/utils/server/factory";
import db from "@/db";
import { filesSelectSchemaArray } from "@/db/schema/files";
import { GeneralErrorType } from "@/utils/types/errors";

export const GET = async () => {
    const files = await db.query.files.findMany();

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
