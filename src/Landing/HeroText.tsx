
function HeroText() {
    return (
        <div className="flex flex-col items-center lg:items-start justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                    Hello there! <br />
                    I'm <span className="text-red-950">Stiven Gjinaj.</span>
                </h1>
            </div>

            <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
                I'm passionate about exploring the digital world—whether it's building high-level or low-level systems. I enjoy learning new technologies and turning ideas into real, meaningful experiences. I'm driven by curiosity, creativity, and a desire to keep growing as a developer.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
                >
                    View My Projects
                </a>
                <a
                    href="#about"
                    className="px-6 py-3 rounded-full border border-slate-300 text-slate-800 text-sm font-medium hover:bg-slate-100 transition-colors"
                >
                    Learn More About Me
                </a>
            </div>
        </div>
    );
}

export default HeroText;