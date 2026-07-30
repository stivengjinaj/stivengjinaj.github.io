import './App.css'
import Navbar from "./Navbar.tsx";
import HeroSection from "./Landing/HeroSection.tsx";
import {useState} from "react";

function App() {
    // 0-home, 1-about, 2-projects, 3-contact me
    const [currentSection, setCurrentSection] = useState<number>(0);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <main className="xl:ml-12 xl:pt-20">
                <div className="flex flex-col gap-24">
                    <HeroSection />
                </div>
            </main>
        </div>
    )
}

export default App
