import ViewMoreButton from "../components/ViewMoreButton.tsx";
import {professionalData} from "../types/data.ts";
import Job from "./Job.tsx";
import {useState} from "react";
import ViewMoreModal from "./ViewMoreModal.tsx";

function ProfessionalExperiences(){
    const [showExperienceModal, setShowExperienceModal] = useState(false);

    return (
        <div className="flex flex-col gap-4 bg-zinc-50/10 dark:bg-zinc-900/30 border border-gray-200 dark:border-zinc-800 backdrop-blur-xs shadow-xl rounded-xl p-5">
            <div className="relative flex items-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight ms-5">Professional Experience</h2>
            </div>
            {
                professionalData.slice(0,2).map((job) => {
                    return <Job date={job.date} jobTitle={job.jobTitle} company={job.company} description={job.description}/>
                })
            }
            <ViewMoreButton
                title={"View Full Experience"}
                onClick={()=> setShowExperienceModal(true)}
            />
            {showExperienceModal && <ViewMoreModal open={showExperienceModal} setOpen={setShowExperienceModal}/>}
        </div>
    )
}

export default ProfessionalExperiences;