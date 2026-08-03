import {GitHub} from "@mui/icons-material";
import type {ProjectsProps} from "../types/types.ts";

function Project({title, thumbnail, category, description, link}: ProjectsProps) {
    return (
        <div className="flex flex-col items-start justify-between p-5 rounded-xl backdrop-blur-sm bg-zinc-50/10 dark:bg-zinc-900/30">
            <div>
                <div className="w-full aspect-video overflow-hidden rounded-xl">
                    {thumbnail.endsWith(".mp4") ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            src={thumbnail}
                        />
                    ) : (
                        <img
                            src={thumbnail}
                            alt="project thumbnail"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                <h2 className="text-xl font-bold leading-tight mt-3 text-zinc-900 dark:text-zinc-300">{title}</h2>
                <span className="bg-emerald-800 dark:bg-emerald-700 text-white text-xs rounded-2xl px-3 mt-1">{category.toLocaleUpperCase()}</span>
                <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-tight mt-2">
                    {description}
                </p>
            </div>

            <button
                onClick={() => window.open(link, "_blank")}
                className="flex items-center gap-2 mt-3 bg-black hover:bg-zinc-900 py-1 px-3 rounded-2xl"
            >
                {link.length == 0
                    ? <span className="text-red-500 text-xs font-semibold">Under NDA</span>
                    : <>
                        <GitHub className="text-white"/>
                        <span className="text-gray-100 text-xs font-semibold">View project</span>
                    </>
                }
            </button>
        </div>
    );
}

export default Project;