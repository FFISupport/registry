import type { FC } from "react";
import type { PageParams } from "@/utils/types/client";
import { UT_BASE_URL } from "@/utils/consts";

const FilePage: FC<PageParams> = ({ params }) => {
    const { slug } = params;
    return (
        <div className="flex flex-col items-center gap-2">
            <p>{slug}</p>
            <embed src={`${UT_BASE_URL}/${slug}`} className="h-326 w-256" />
        </div>
    );
};

export default FilePage;
