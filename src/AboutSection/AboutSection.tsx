import type {RefSection} from "../types/types.ts";

function AboutSection({ref}: RefSection) {
    return (
        <section ref={ref} className="min-h-screen flex items-center snap-start relative overflow-hidden">
            About page
        </section>
    )
}

export default AboutSection;