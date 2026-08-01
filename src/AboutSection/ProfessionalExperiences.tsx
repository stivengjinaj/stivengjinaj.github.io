import Job from "./Job.tsx";

function ProfessionalExperiences(){
    return (
        <div className="flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl rounded-xl p-5">
            <div className="relative flex items-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight ms-5">Professional Experience</h2>
            </div>

            <Job
                date={"February 2025 - September 2025"}
                jobTitle={"Full Stack Developer"}
                company={"Freelance"}
                description={"Designed a full-stack platform for online competitions, implementing algorithms for dynamic score calculation and\n" +
                    "                    referral systems. Designed a NoSQL database on Firebase, implementing secure authentication systems and RESTful APIs for data\n" +
                    "                    synchronization. Integrated the Stripe payment gateway."}
            />
            <Job
                date={"October 2025"}
                jobTitle={"Hackathon Participant - TinyHack"}
                company={"Focoos AI, Z-Ant, Arduino"}
                description={"Developed an end-to-end Edge AI system for real-time image classification on Arduino Nicla Vision. Trained and optimized a computer vision model via the FocoosAI platform, applying quantization techniques to\n" +
                    "reduce model footprint without compromising accuracy.\n" +
                    "Designed hardware-software integration for on-device image acquisition and inference, communicating results to a\n" +
                    "cloud infrastructure via REST APIs."}
            />
        </div>
    )
}

export default ProfessionalExperiences;