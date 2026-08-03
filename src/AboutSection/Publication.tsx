import type {PublicationProp} from "../types/types.ts";
import {NewspaperIcon, SquareArrowOutUpRight} from "lucide-react";


function Publications ({title, conference, link}: PublicationProp) {
    return (
        <div className="flex items-center gap-4 rounded-xl backdrop-blur-sm bg-zinc-100/80 dark:bg-transparent dark:border dark:border-zinc-700 p-3">
            <div className="bg-zinc-200 dark:bg-transparent dark:border dark:border-zinc-700 rounded-xl p-6">
                <NewspaperIcon className="dark:text-gray-300"/>
            </div>
            <div className="flex flex-1 items-center justify-between">
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-gray-300">
                        {title}
                    </h3>

                    <p className="text-xs italic text-zinc-600 dark:text-zinc-300">
                        {conference}
                    </p>
                </div>
                <button
                    className="flex items-center gap-1 rounded-xl border border-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800 px-3 py-2"
                    onClick={() => {window.open(link, '_blank')}}
                >
                    <span className="text-zinc-600 dark:text-gray-300">PDF</span>
                    <SquareArrowOutUpRight className="h-4 w-4 text-zinc-600 dark:text-gray-300" />
                </button>
            </div>

        </div>
    );
}

export default Publications;