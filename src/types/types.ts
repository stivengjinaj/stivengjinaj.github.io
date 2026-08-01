import type {ReactNode, RefObject} from "react";

export type SectionLabel = 'landing' | 'about' | 'projects';
export type ThemeType = 'light' | 'dark';
export type ThemeColor = 'red' | 'blue';
export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
}

export interface NavbarProps {
    currentSection: SectionLabel;
    setCurrentSection: (currentSection: SectionLabel) => void;
    onLandingClick: () => void;
    onAboutClick: () => void;
    onProjectClick: () => void;
    collapsed: boolean;
    onToggleCollapse: () => void;
}

export interface HeroSectionProps {
    ref: RefObject<HTMLDivElement | null>;
    onAboutClick: () => void;
    onProjectClick: () => void;
}

export interface HeroTextProps {
    onAboutClick: () => void;
    onProjectClick: () => void;
}

export interface RefSection {
    ref: RefObject<HTMLDivElement | null>;
}

export interface UniversityProps {
    themeColor: ThemeColor;
    university: string;
    universityLogo: string;
    universityStyle: string;
    date: string;
    major: string;
    orientation: string | ReactNode;
}

export interface JobProps {
    date: string;
    jobTitle: string;
    company: string;
    description: string;
}

export interface PublicationProp {
    title: string;
    conference: string;
    link: string;
}