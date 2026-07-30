import type {HeroTextProps} from "../types/types.ts";

function HeroText({onAboutClick, onProjectClick}: HeroTextProps) {
    return (
        <div className="flex flex-col items-center lg:items-start justify-center space-y-5 md:space-y-6 text-center lg:text-left">
            <div className="space-y-2">
                <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                    Hello there! <br />
                    I'm <span className="text-amber-900 dark:text-amber-700">Stiven Gjinaj.</span>
                </h1>
            </div>
            <p className="text-sm md:text-lg text-slate-600 dark:text-slate-200 max-w-xs md:max-w-lg leading-relaxed">
                I'm passionate about exploring the digital world—whether it's building high-level or low-level systems. I enjoy learning new technologies and turning ideas into real, meaningful experiences. I'm driven by curiosity, creativity, and a desire to keep growing as a developer.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 pt-2">
                <button
                    onClick={onProjectClick}
                    className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-slate-900 dark:border-gray-800 bg-slate-900 dark:bg-gray-700 text-white dark:text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
                >
                    View My Projects
                </button>
                <button
                    onClick={onAboutClick}
                    className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border text-sm font-medium text-slate-800 dark:text-slate-200 border-slate-400 hover:bg-slate-100 transition-colors"
                >
                    Learn More About Me
                </button>
            </div>
        </div>
    );
}

export default HeroText;