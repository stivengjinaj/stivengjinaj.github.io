import {MoonIcon, SunIcon} from "lucide-react";
import {useTheme} from "./hooks/useTheme.ts";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gray-900 dark:bg-white transition-colors duration-200"
            onClick={toggleTheme}
        >
            {theme === "dark"
                ? <SunIcon />
                : <MoonIcon color="white" />}
        </button>
    );
}