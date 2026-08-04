import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import type {Dispatch, SetStateAction} from "react";
import {professionalData} from "../types/data.ts";
import Job from "./Job.tsx";

function ViewMoreModal({
                           open,
                           setOpen
                       }: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            {/* Backdrop */}
            <DialogBackdrop
                transition
                className="
                    fixed inset-0
                    bg-zinc-950/20
                    dark:bg-black/40
                    backdrop-blur-md
                    transition duration-300
                    data-closed:opacity-0
                "
            />

            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center">
                    <DialogPanel
                        transition
                        className="
                            relative
                            w-full
                            max-w-2xl
                            max-h-[60vh]

                            overflow-hidden
                            rounded-3xl

                            bg-white/70
                            dark:bg-zinc-900/10

                            backdrop-blur-xs

                            border
                            border-white/40
                            dark:border-zinc-700/50

                            shadow-2xl
                            shadow-black/10

                            transition-all
                            duration-300

                            data-closed:opacity-0
                            data-closed:scale-95
                        "
                    >
                        <div
                            className="
                                absolute inset-0
                                bg-gradient-to-br
                                from-white/20
                                to-transparent
                                pointer-events-none
                            "
                        />

                        <div className="relative flex max-h-[80vh] flex-col px-10 py-6">
                            <h2 className="mb-5 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                Professional Experience
                            </h2>

                            <div className="overflow-y-auto">
                                {professionalData.map((job) => (
                                    <Job
                                        key={`${job.company}-${job.jobTitle}`}
                                        date={job.date}
                                        jobTitle={job.jobTitle}
                                        company={job.company}
                                        description={job.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
export default ViewMoreModal;