import type {
    SuccessResponse,
    ResponseData,
    ErrorResponse,
} from "@/utils/types/responses";
import { StatusType } from "@/utils/types/responses";

export const newSuccessResponse = (data: ResponseData) => {
    const response: SuccessResponse = {
        data,
        status: StatusType.SUCCESS,
    };
    return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const newErrorResponse = (httpCode: number, errorObj: ErrorResponse) => {
    return new Response(JSON.stringify(errorObj), {
        status: httpCode,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
