import ProfileImage from "./ProfileImage.tsx";
import HeroText from "./HeroText.tsx";
import type {HeroSectionProps} from "../types/types.ts";

function HeroSection({ref, onAboutClick, onProjectClick}: HeroSectionProps) {
    return (
        <section ref={ref} className="min-h-screen flex items-center snap-start relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 items-center">
                    <div className="order-2 md:order-1">
                        <ProfileImage />
                    </div>
                    <div className="order-1 md:order-2">
                        <HeroText onAboutClick={onAboutClick} onProjectClick={onProjectClick} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;