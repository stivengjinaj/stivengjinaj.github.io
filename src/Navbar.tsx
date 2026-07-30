import useScreenSize from "./hooks/useScreenSize.ts";
import type {NavbarProps} from "./types/types.ts";
import {
    AccountTree,
    AccountTreeOutlined,
    Info,
    InfoOutlined,
    ListAltOutlined,
} from "@mui/icons-material";
import {HomeIcon} from "lucide-react";

function Navbar({currentSection, setCurrentSection} : NavbarProps) {
    const {screenSize} = useScreenSize();

    return (
        <nav className="w-full bg-white py-4 xl:fixed xl:top-1/2 xl:-translate-y-1/2 xl:left-6 xl:w-24 xl:h-[70vh] rounded-[40px] shadow">
            <div className="flex items-center justify-between px-6 xl:px-2 py-4 xl:flex-col xl:h-full">
                <h2 className="text-3xl font-bold text-red-950 tracking-tight">
                        <span className="xl:hidden md:inline sm:hidden hidden">Stiven Gjinaj</span>
                        <span className="md:hidden sm:inline xl:inline">S.GJ</span>
                </h2>
                <div className="flex items-center xl:justify-end text-sm font-medium text-emerald-950 space-x-12 xl:flex-col xl:space-x-0 xl:space-y-20">

                    <button
                        className="hover:text-emerald-800 transition-colors"
                        onClick={() => setCurrentSection(0)}
                    >
                        {currentSection == 0 ? <HomeIcon strokeWidth={4}/> : <HomeIcon/>}
                    </button>

                    <button
                        className="hover:text-emerald-800 transition-colors"
                        onClick={() => setCurrentSection(1)}
                    >
                        {currentSection == 1 ? <Info/> : <InfoOutlined/>}
                    </button>

                    <button
                        className="hover:text-emerald-800 transition-colors"
                        onClick={() => setCurrentSection(2)}
                    >
                        {currentSection == 2 ? <AccountTree/> : <AccountTreeOutlined/>}
                    </button>

                    <button className="px-3 py-3 rounded-full bg-emerald-950 text-white hover:bg-emerald-800">
                        {screenSize == "xl" ? <ListAltOutlined/> : "Resume"}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;