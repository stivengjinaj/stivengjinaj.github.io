import {GitHub} from "@mui/icons-material";

function Project() {
    return (
        <div className="flex flex-col items-start justify-center p-5 rounded-xl bg-gray-200 dark:bg-zinc-900">
            <img src={"/stiflix.png"} alt={'project thumbnail'} className="rounded-xl"/>
            <h2 className="text-xl font-bold leading-tight mt-3 text-zinc-900 dark:text-zinc-300">Stiflix</h2>
            <span className="bg-emerald-800 dark:bg-emerald-700 text-white text-xs rounded-2xl px-3 mt-1">Web</span>
            <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-tight mt-2">
                Stiflix is a streaming website that offers the possibility to watch movies for free and have an account to save watched movies.
            </p>
            <button
                onClick={() => window.open("link", "_blank")}
                className="flex items-center gap-2 mt-3 bg-black hover:bg-zinc-900 py-1 px-3 rounded-2xl"
            >
                <GitHub className="text-white"/>
                <span className="text-gray-100 text-xs font-semibold">View project</span>
            </button>
        </div>
    );
}

export default Project;