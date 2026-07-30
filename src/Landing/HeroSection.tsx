import ProfileImage from "./ProfileImage.tsx";
import HeroText from "./HeroText.tsx";

function HeroSection() {
    return (
        <section className="min-h-screen flex items-center snap-start">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center pt-5">
                    <div className="order-2 md:order-1">
                        <ProfileImage />
                    </div>
                    <div className="order-1 md:order-2">
                        <HeroText />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;