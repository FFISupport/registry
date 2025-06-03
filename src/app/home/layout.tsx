import { NavBar } from "@/components/Navigation/NavBar";
import type { LayoutProps } from "@/app/layout";

const HomeLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default HomeLayout;
