import type {RefSection} from "../types/types.ts";

function ProjectsSection({ref}: RefSection) {
    return (
        <section id={"projects"} ref={ref} className="min-h-screen flex items-center snap-start relative overflow-hidden">
            Projects
        </section>
    )
}

export default ProjectsSection;