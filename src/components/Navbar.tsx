import type { NavbarProps } from "../types/types.ts";
import {
    AccountCircle, AccountCircleOutlined,
    AccountTree,
    AccountTreeOutlined, HomeOutlined, HomeRounded,
    Info,
    InfoOutlined,
    ListAltOutlined,
} from "@mui/icons-material";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useEffect, useRef} from "react";

function Navbar({
    currentSection,
    setCurrentSection,
    onLandingClick,
    onAboutClick,
    onProjectClick,
    onContactClick,
    collapsed,
    onToggleCollapse
}: NavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            onToggleCollapse();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={navRef}>
            <nav
                className={
                `fixed bottom-4 left-1/2 -translate-x-1/2 z-50
                w-fit max-w-[92vw]
                bg-white/10 backdrop-blur-sm
                rounded-full shadow-sm shadow-black/30
                px-7 py-2

                xl:top-1/2 xl:left-6 xl:translate-x-0 xl:-translate-y-1/2
                xl:w-18 xl:h-[65vh] xl:max-w-none xl:px-1 xl:py-4
                xl:rounded-[40px] xl:bg-white/10
                xl:dark:bg-zinc-900
                xl:backdrop-blur-none
                xl:backdrop-saturate-100
                xl:dark:shadow-zinc-800/100
                xl:border-0 xl:shadow
                
                xl:transition-[transform,opacity] xl:duration-500 xl:ease-in-out
                ${collapsed ? "xl:-translate-x-40 xl:opacity-0 xl:pointer-events-none" : "xl:translate-x-0 xl:opacity-100"}

                `}
            >
                <div className="flex items-center justify-around gap-8 xl:flex-col xl:h-full xl:justify-between xl:gap-0 xl:py-4">
                    {/*<h2 className="hidden xl:block text-2xl font-bold text-red-950 dark:text-amber-700 tracking-tight">
                        S.GJ
                    </h2>*/}

                    <div className="flex items-center gap-8 text-emerald-950 xl:flex-col xl:gap-20">
                        <button
                            className="hover:text-amber-900 dark:text-white dark:hover:text-amber-700 transition-colors"
                            onClick={() => {
                                setCurrentSection("landing")
                                onLandingClick()
                            }}
                            aria-label="Home"
                        >
                            {currentSection === "landing" ? (
                                <HomeRounded className="text-2xl" />
                            ) : (
                                <HomeOutlined />
                            )}
                        </button>

                        <button
                            className="hover:text-amber-900 dark:text-white dark:hover:text-amber-700 transition-colors"
                            onClick={() => {
                                setCurrentSection("about")
                                onAboutClick()
                            }}
                            aria-label="About"
                        >
                            {currentSection === "about" ? (
                                <Info fontSize="medium" />
                            ) : (
                                <InfoOutlined fontSize="medium" />
                            )}
                        </button>

                        <button
                            className="hover:text-amber-900 dark:text-white dark:hover:text-amber-700 transition-colors"
                            onClick={() => {
                                setCurrentSection("projects")
                                onProjectClick()
                            }}
                            aria-label="Projects"
                        >
                            {currentSection === "projects" ? (
                                <AccountTree fontSize="medium" />
                            ) : (
                                <AccountTreeOutlined fontSize="medium" />
                            )}
                        </button>

                        <button
                            className="hover:text-amber-900 dark:text-white dark:hover:text-amber-700 transition-colors"
                            onClick={() => {
                                setCurrentSection("contact")
                                onContactClick()
                            }}
                            aria-label="Contact"
                        >
                            {currentSection === "contact" ? (
                                <AccountCircle fontSize="medium" />
                            ) : (
                                <AccountCircleOutlined fontSize="medium" />
                            )}
                        </button>

                        <button
                            className="p-2.5 xl:px-3 xl:py-3 rounded-full bg-emerald-950 hover:bg-emerald-700  text-white hover:text-white dark:hover:text-white dark:hover:text-amber-700 transition-colors"
                            onClick={() => {
                                window.open("/CV.pdf", "_blank");
                            }}
                            aria-label="Resume"
                        >
                            <ListAltOutlined fontSize="medium" />
                        </button>
                    </div>
                </div>
            </nav>
            <button
                onClick={onToggleCollapse}
                aria-label={collapsed ? "Show navigation" : "Hide navigation"}
                className="
                    hidden
                    xl:flex xl:items-center xl:justify-center
                    xl:fixed xl:left-10 xl:p-5
                    xl:top-[calc(50%+38vh+14px)]
                    xl:rounded-full xl:shadow
                    xl:bg-gray-100 xl:text-black
                    xl:dark:bg-gray-950 xl:dark:text-white
                    xl:hover:dark:bg-gray-700 xl:hover:dark:text-white
                    xl:hover:bg-gray-400 xl:hover:text-white xl:transition-colors
                    z-40
                "
            >
                {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
        </div>

    );
}

export default Navbar;