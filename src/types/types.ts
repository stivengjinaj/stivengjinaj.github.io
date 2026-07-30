import type {RefObject} from "react";

export type SectionLabel = 'landing' | 'about' | 'projects';
export type ThemeType = 'light' | 'dark';

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