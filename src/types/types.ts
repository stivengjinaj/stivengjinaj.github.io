export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
}

export interface NavbarProps {
    currentSection: number;
    setCurrentSection: (currentSection: number) => void;
    collapsed: boolean;
    onToggleCollapse: () => void;
}