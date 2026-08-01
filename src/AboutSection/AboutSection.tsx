import type {RefSection} from "../types/types.ts";
import ProfessionalExperiences from "./ProfessionalExperiences.tsx";
import AcademicCard from "./AcademicCard.tsx";
import Publications from "./Publications.tsx";

function AboutSection({ref}: RefSection) {
    return (
        <section id={"about"} ref={ref} className="min-h-screen pt-3 px-5 gap-2 flex flex-col items-center snap-start relative overflow-hidden">
            <AcademicCard/>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                <ProfessionalExperiences />
                <Publications />
            </div>
        </section>
    )
}
export default AboutSection;