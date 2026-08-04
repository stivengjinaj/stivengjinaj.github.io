import type {JobProps} from "../types/types.ts";

function Job({date, jobTitle, company, description}: JobProps) {
    return (
        <div className="flex gap-4 items-stretch w-full mt-5">
            <div className="hidden lg:flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-blue-900 dark:bg-zinc-400 mt-2" />
                <div className="w-0.5 flex-1 bg-gray-300 dark:bg-zinc-700 mt-1" />
            </div>

            <div>
                <h3 className="text-md text-slate-900 dark:text-gray-300 font-bold tracking-tight">{jobTitle}</h3>
                <h3 className="text-sm text-zinc-900 dark:text-gray-300 tracking-tight italic font-semibold">{company}</h3>
                <h3 className="text-xs text-zinc-800 dark:text-zinc-300 tracking-tight">{date}</h3>
                <p className="text-zinc-950 dark:text-gray-300 mt-1">{description}</p>
            </div>
        </div>
    );
}

export default Job;