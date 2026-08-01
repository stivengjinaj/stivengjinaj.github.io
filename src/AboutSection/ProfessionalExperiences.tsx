import Job from "./Job.tsx";
import ViewMoreButton from "../components/ViewMoreButton.tsx";

function ProfessionalExperiences(){
    return (
        <div className="flex flex-col opacity-90 gap-4 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl rounded-xl p-5">
            <div className="relative flex items-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight ms-5">Professional Experience</h2>
            </div>

            <Job
                date={"February 2025 - September 2025"}
                jobTitle={"Full Stack Developer"}
                company={"Freelance"}
                description={"Designed a full-stack platform for online competitions, implementing algorithms for dynamic score calculation and referral systems."}
            />
            <Job
                date={"October 2025"}
                jobTitle={"Hackathon Participant - TinyHack"}
                company={"Focoos AI, Z-Ant, Arduino"}
                description={"Developed an end-to-end Edge AI system for real-time image classification on Arduino Nicla Vision"}
            />

            <ViewMoreButton
                title={"View Full Experience"}
                onClick={()=> console.log("View Full Experience")}
            />
        </div>
    )
}

export default ProfessionalExperiences;