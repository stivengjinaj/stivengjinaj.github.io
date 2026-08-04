import {MoveRight} from "lucide-react";
import type {ViewMoreProps} from "../types/types.ts";

function ViewMoreButton({title, onClick}: ViewMoreProps) {
    return (
        <button
            className="self-start mt-1 flex items-center gap-3 rounded-xl border border-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-3 py-2"
            onClick={onClick}
        >
            <span className="dark:text-zinc-300">{title}</span>
            <MoveRight className="dark:text-zinc-300" />
        </button>
    )
}

export default ViewMoreButton;