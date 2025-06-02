import type { ApiError } from "@/utils/types/errors";
import type { z } from "zod";
import type {
    filesSelectSchema,
    filesSelectSchemaArray,
} from "@/db/schema/files";

interface ApiResponse {
    status: StatusType;
    data?: ResponseData;
    error?: ApiError;
}

export interface SuccessResponse extends ApiResponse {
    status: StatusType.SUCCESS;
    data: ResponseData;
}

export interface ErrorResponse extends ApiResponse {
    status: StatusType.ERROR;
    error: ApiError;
}

export type ResponseData = FilesResponse | FileResponse;

export enum StatusType {
    SUCCESS = "success",
    ERROR = "error",
}

export type FilesResponse = z.infer<typeof filesSelectSchemaArray>;

export type FileResponse = z.infer<typeof filesSelectSchema>;
