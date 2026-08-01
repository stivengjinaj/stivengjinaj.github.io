import type {UniversityProps} from "../types/types.ts";


const colorMap = {
    red: {
        dot: "bg-red-900 dark:bg-red-500",
        date: "text-red-900 dark:text-red-400"
    },
    blue: {
        dot: "bg-blue-900 dark:bg-blue-500",
        date: "text-blue-900 dark:text-blue-400"
    }
};

function UniversityTimeline({themeColor, university, universityLogo, universityStyle, date, major, orientation}: UniversityProps){
    const colors = colorMap[themeColor];

    return(
        <div className="flex flex-row lg:flex-col items-center">
            <div className="hidden lg:flex items-center w-full">
                <div className="flex-1 h-0.5 bg-gray-300 dark:bg-zinc-700" />
                <div className={`w-3 h-3 rounded-full ${colors.dot}`} />
                <div className="flex-1 h-0.5 bg-gray-300 dark:bg-zinc-700" />
            </div>

            <div className="lg:px-10 w-full">
                <div className="flex gap-4 bg-gray-200 dark:bg-zinc-900 dark:border dark:border-zinc-700 rounded-xl mt-5 md:p-10 p-5">
                    <img src={universityLogo} alt="polito" className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"/>
                    <div className="flex flex-col items-start justify-start">
                        <span className={`${colors.date} font-bold text-xs`}>{date}</span>
                        <span className={universityStyle}>{university}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-bold font-sans text-md">{major}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-bold font-sans text-sm">{orientation}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniversityTimeline;