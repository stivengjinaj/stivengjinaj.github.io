import {FileUser, Home, Info, Presentation} from "lucide-react";
import useScreenSize from "./useScreenSize.ts";

function Navbar() {
    const [screenSize] = useScreenSize();

    return (
        <nav className="w-full bg-white py-4 xl:fixed xl:top-1/2 xl:-translate-y-1/2 xl:left-6 xl:w-24 xl:h-[70vh] rounded-4xl shadow">
            <div className="flex items-center justify-between px-6 xl:px-2 py-4 xl:flex-col xl:h-full">
                <h2 className="text-3xl font-bold text-red-950 tracking-tight">{screenSize == "xl" ? "S.GJ" : "Stiven Gjinaj"}</h2>
                <div className="flex items-center xl:justify-end text-sm font-medium text-emerald-950 space-x-6 xl:flex-col xl:space-x-0 xl:space-y-20">
                    <button className="hover:text-emerald-800 transition-colors">{screenSize == "xl" ? <Home/> : "Home"}</button>
                    <button className="hover:text-emerald-800 transition-colors">{screenSize == "xl" ? <Info/> : "Info"}</button>
                    <button className="hover:text-emerald-800 transition-colors">{screenSize == "xl" ? <Presentation/> : "Projects"}</button>
                    <button className="px-3 py-3 rounded-full bg-emerald-950 text-white hover:bg-emerald-800">
                        {screenSize == "xl" ? <FileUser/> : "Resume"}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;