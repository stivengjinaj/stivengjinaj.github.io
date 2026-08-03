import type {RefSection} from "../types/types.ts";
import MainComponent from "./MainComponent.tsx";

function ProjectsSection({ref}: RefSection) {
    return (
        <section id={"projects"} ref={ref} className="min-h-screen opacity-90 flex flex-col items-start snap-start relative px-5 py-10 xl:pl-30 lg:pr-5">
            <h2 className="text-slate-900 dark:text-zinc-300 font-bold text-3xl leading-tight ">Projects</h2>
            <span className="text-gray-500 dark:text-gray-300 text-sm leading-tight mt-2">A selection of projects I have worked on. Each one of them shaped <br/>the way I confronted a problem to find a solution.</span>
            <MainComponent />
        </section>
    )
}

export default ProjectsSection;