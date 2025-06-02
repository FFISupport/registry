import type { FC } from "react";
import type { PageParams } from "@/utils/types/client";
import { FileDisplay } from "@/components/Files/FileDisplay";

const FilePage: FC<PageParams> = ({ params }) => {
    const { slug } = params;
    return <FileDisplay blobKey={slug} />;
};

export default FilePage;
