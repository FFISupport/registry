import type { FC } from "react";
import { FilesList } from "@/components/Files/FilesList";

const HomePage: FC = () => {
    return (
        <div className="dark:bg-ctp-base bg-ctp-l-base flex min-h-screen flex-col items-center justify-center gap-8">
            <h1 className="text-2xl font-bold">Your Files</h1>
            <FilesList />
        </div>
    );
};

export default HomePage;
