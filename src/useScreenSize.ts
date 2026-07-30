import {useEffect, useState} from "react";

export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState("xl")
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 1280) {
                setScreenSize("md")
            }else {
                setScreenSize("xl")
            }
            setSize(window.innerWidth)
        });

        return () => {
            window.removeEventListener("resize", () => {
                setScreenSize("xl")
                setSize(window.innerWidth)
            })
        }
    }, []);
    return [screenSize, size];
}