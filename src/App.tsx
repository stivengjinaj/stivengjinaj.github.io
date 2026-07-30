import './App.css'
import Navbar from "./Navbar.tsx";
import HeroSection from "./Landing/HeroSection.tsx";
import {useState} from "react";

function App() {
    // 0-home, 1-about, 2-projects, 3-contact me
    const [currentSection, setCurrentSection] = useState<number>(0);

    return (
        <div className={`h-screen ${currentSection % 2 == 0 ? "bg-gray-100" : "bg-white"}`}>
            <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <main className="xl:ml-32 h-screen overflow-y-auto snap-y snap-mandatory">
                <HeroSection />
            </main>
        </div>
    )
}

export default App
