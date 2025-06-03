import type { PageParams } from "@/utils/types/client";
import { FileDisplay } from "@/components/Files/FileDisplay";

const FilePage = async ({ params }: PageParams) => {
    const { slug } = await params;
    return <FileDisplay blobKey={slug} />;
};

export default FilePage;
