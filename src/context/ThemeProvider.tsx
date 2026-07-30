import {type ReactNode, useEffect, useState} from "react";
import type {ThemeType} from "../types/types.ts";
import {ThemeContext} from "./ThemeContext.tsx";

export function ThemeProvider({ children }: { children: ReactNode }) {

    const [theme, setTheme] = useState<ThemeType>(() => {
        return (localStorage.getItem("theme") as ThemeType) || "light";
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}