import type {RefSection} from "../types/types.ts";
import {Mail, Phone} from "lucide-react";
import {LinkedIn} from "@mui/icons-material";


function ContactSection({ref}: RefSection) {
    return (
        <section id={"contact"} ref={ref} className="min-h-screen pl-20 pr-10 gap-2 flex flex-col items-center justify-center snap-start relative overflow-hidden">
            <h1 className="text-amber-900 dark:text-amber-800 font-bold text-5xl">Get in Touch</h1>
            <h3 className="text-amber-700 dark:text-zinc-100 font-semibold text-md">Let's bring our ideas to life</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 justify-center items-center mt-20">
                <div className="flex flex-col items-center rounded-2xl bg-zinc-600/10 backdrop-blur-sm px-13 py-10">
                    <Phone className="text-amber-800 dark:text-zinc-300" size={60}/>
                    <div className="w-full flex flex-col mt-10 gap-2">
                        <button className="px-5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-500/50 dark:text-zinc-100 backdrop-blur-sm truncate">+355 69 374 9509</button>
                        <button className="px-5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-500/50 dark:text-zinc-100 backdrop-blur-sm truncate">+355 69 374 9509</button>
                    </div>
                </div>

                <div className="flex flex-col items-center rounded-2xl bg-zinc-600/10 backdrop-blur-sm px-13 py-10">
                    <Mail className="text-amber-800 dark:text-zinc-300" size={60}/>
                    <div className="w-full flex flex-col mt-10 gap-2">
                        <button className="px-5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-500/50 dark:text-zinc-100 truncate">stivengjinaj@hotmail.com</button>
                        <button className="px-5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-500/50 dark:text-zinc-100 truncate">stivengjinaj2002@gmail.com</button>
                    </div>
                </div>
            </div>
            <button
                onClick={() => window.open("https://www.linkedin.com/in/stiven-gjinaj-835134161/", "_blank")}
                className="flex justify-center items-center px-15 py-3 mt-5 gap-5 bg-sky-950 hover:bg-sky-800 dark:bg-sky-800 dark:hover:bg-sky-700 rounded-2xl">
                <LinkedIn sx={{fontSize: 40}} className="text-zinc-100"/>
                <span className="text-2xl font-semibold text-zinc-100">Connect</span>
            </button>
        </section>
    )
}

export default ContactSection;