import { useEffect, useState } from "react";

export default function useScreenSize() {
    const getScreenSize = (width: number) => {
        if (width < 640) return "sm";
        if (width < 768) return "md";
        if (width < 1024) return "lg";
        return "xl";
    };

    const [size, setSize] = useState(window.innerWidth);
    const [screenSize, setScreenSize] = useState(
        getScreenSize(window.innerWidth)
    );

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setSize(width);
            setScreenSize(getScreenSize(width));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { screenSize, size };
}