import type { SVGProps } from "react";

export const FFILogo = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="3em"
            height="2em"
            viewBox="0 0 67 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* This icon is a trademark of First Filter International.*/}
            <path
                d="M5.99691 0L11.1904 21.0926H0.803434L5.99691 0Z"
                fill="currentColor"
            />
            <path
                d="M61.0219 0L66.1989 21.0527H55.8448L61.0219 0Z"
                fill="currentColor"
            />
            <path
                d="M47.3647 0L52.5417 21.0527H42.1876L47.3647 0Z"
                fill="currentColor"
            />
            <path
                d="M33.7069 0L38.884 21.0527H28.5299L33.7069 0Z"
                fill="currentColor"
            />
            <path
                d="M20.0492 0L25.2263 21.0527H14.8722L20.0492 0Z"
                fill="currentColor"
            />
        </svg>
    );
};
