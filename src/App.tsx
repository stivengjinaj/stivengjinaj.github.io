import './App.css'
import Navbar from "./components/Navbar.tsx";
import LandingSection from "./Landing/LandingSection.tsx";
import {useEffect, useRef, useState} from "react";
import backgroundImage from "./assets/backgroundLight.png";
import backgroundDark from "../src/assets/backgroundDark.png";
import ThemeToggleButton from "./components/ThemeToggleButton.tsx";
import {useTheme} from "./hooks/useTheme.ts";
import type {SectionLabel} from "./types/types.ts";
import AboutSection from "./AboutSection/AboutSection.tsx";
import ProjectsSection from "./ProjectsSection/ProjectsSection.tsx";
import ContactSection from "./ContactSection/ContactSection.tsx";

function App() {
    // 0-home, 1-about, 2-projects, 3-contact
    const [currentSection, setCurrentSection] = useState<SectionLabel>('landing');
    const [navCollapsed, setNavCollapsed] = useState(false);
    const landingRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    const {theme} = useTheme();
    const mainStyle = {
        backgroundImage: `url(${theme === "light" ? backgroundImage : backgroundDark})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    useEffect(() => {
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id as SectionLabel);
                    }
                })
            },
            { threshold: 0.5 }
        )

        observer.observe(landingRef.current as HTMLDivElement);
        observer.observe(aboutRef.current as HTMLDivElement);
        observer.observe(projectsRef.current as HTMLDivElement);
        observer.observe(contactRef.current as HTMLDivElement);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`h-screen bg-gray-100 transition-all duration-700`}
             style={mainStyle}>
            <Navbar
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                onLandingClick={() => landingRef.current?.scrollIntoView({ behavior: "smooth" })}
                onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
                onProjectClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
                onContactClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
                collapsed={navCollapsed}
                onToggleCollapse={() => setNavCollapsed((c) => !c)}
            />
            <main
                className={`
                    h-screen overflow-y-auto snap-y snap-mandatory
                    scroll-pt-20 xl:scroll-pt-0
                    transition-all duration-500 ease-in-out
                    ${navCollapsed ? "xl:ml-0" : "xl:ml-32"}
                `}
            >
                <LandingSection
                    ref={landingRef}
                    onAboutClick={() => {
                        setCurrentSection("about");
                        aboutRef.current?.scrollIntoView({behavior: "smooth"})
                    }}
                    onProjectClick={() => {
                        setCurrentSection("projects");
                        projectsRef.current?.scrollIntoView({behavior: "smooth"})
                    }}
                />
                <AboutSection ref={aboutRef}/>
                <ProjectsSection ref={projectsRef}/>
                <ContactSection ref={contactRef}/>
            </main>
            <ThemeToggleButton />
        </div>
    );
}

export default App
