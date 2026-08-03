import UniversityTimeline from "./UniversityTimeline.tsx";
import polito from "../assets/polito.png"
import unibo from "../assets/unibo.svg"

function AcademicCard(){
    return (
        <div className="flex w-full flex-col opacity-90 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl rounded-xl px-6 md:px-10 lg:px-20 py-8">
            <div className="relative flex items-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight ms-5">Academic Preparation</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-stretch w-full gap-0 mt-8">
                <UniversityTimeline
                    themeColor={"red"}
                    university={"Alma Mater Studiorum - Università di Bologna"}
                    universityLogo={unibo}
                    universityStyle={"text-red-950 dark:text-red-500 font-bold font-serif text-xl"}
                    major={"Bachelor's in Computer Science Engineering"}
                    date={"September 2020 - March 2024"}
                    orientation={<br/>}
                />
                <UniversityTimeline
                    themeColor={"blue"}
                    university={"Politecnico di Torino"}
                    universityLogo={polito}
                    universityStyle={"text-blue-950 dark:text-blue-500 font-bold font-serif text-xl"}
                    major={"Master of Science in Computer Engineering"}
                    date={"March 2024 - July 2026"}
                    orientation={"AI and Data Analytics"}
                />
            </div>
        </div>
    );
}

export default AcademicCard;