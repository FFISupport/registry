import type { LayoutProps } from "@/app/layout";
import { BackButton } from "@/components/Buttons/BackButton";

const FileLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <BackButton />
            {children}
        </div>
    );
};

export default FileLayout;
