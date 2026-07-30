import './App.css'
import Navbar from "./Navbar.tsx";
import HeroSection from "./Landing/HeroSection.tsx";
import {useState} from "react";
import backgroundImage from "./assets/backgroundLight.png";
import backgroundDark from "../src/assets/backgroundDark.png";
import ThemeToggleButton from "./ThemeToggleButton.tsx";
import {useTheme} from "./hooks/useTheme.ts";

function App() {
    // 0-home, 1-about, 2-projects, 3-contact me
    const [currentSection, setCurrentSection] = useState<number>(0);
    const {theme} = useTheme();

    console.log(theme);

    const mainStyle = {
        backgroundImage: `url(${theme === "light" ? backgroundImage : backgroundDark})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className={`h-screen ${currentSection % 2 == 0 ? "bg-gray-100" : "bg-white"} transition-all duration-700`}
             style={mainStyle}>
            <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <main className="pt-24 xl:pt-0 xl:ml-32 h-screen overflow-y-auto snap-y snap-mandatory scroll-pt-15 xl:scroll-pt-0">
                <HeroSection />
                <HeroSection />
            </main>
            <ThemeToggleButton />
        </div>
    )
}

export default App
