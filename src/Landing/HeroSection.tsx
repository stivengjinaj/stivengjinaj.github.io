import ProfileImage from "./ProfileImage.tsx";
import HeroText from "./HeroText.tsx";

function HeroSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ProfileImage />
                <HeroText />
            </div>
        </section>
    );
}

export default HeroSection;