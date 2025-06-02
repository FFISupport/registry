export interface ApiError {
    type?: ErrorType;
    message: string;
    details?: unknown;
}

export enum GeneralErrorType {
    TYPE_ERROR = "Type error.",
    ENV_UNSET = "An environment variable was not properly set.",
    PARAMS_ERROR = "Query params incomplete.",
}

export enum FileErrorType {
    FILE_DOES_NOT_EXIST = "File does not exist in db.",
}

export type ErrorType = GeneralErrorType | FileErrorType;
