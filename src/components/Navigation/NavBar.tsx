import { FFILogo } from "@/components/Icons/FFILogo";
import { ProfileButton } from "@/components/Profile/ProfileButton";
import { UploadNavButton } from "@/components/Upload/UploadNavButton";

export const NavBar = () => {
    return (
        <div className="dark:border-b-ctp-surface-1 border-b-ctp-l-surface-1 flex min-w-dvh items-center justify-between gap-2 border-b p-4 pr-8 pl-8">
            <a href="/home">
                <div className="flex items-center justify-center gap-2 align-middle">
                    <FFILogo className="dark:text-ctp-sky text-ctp-l-sky" />
                    <h1 className="text-lg font-semibold">Registry</h1>
                </div>
            </a>
            <div className="flex items-center gap-4">
                <UploadNavButton />
                <ProfileButton />
            </div>
        </div>
    );
};
