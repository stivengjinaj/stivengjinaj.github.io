import type {JobProps, ProjectsProps} from "./types.ts";

export const projects: ProjectsProps[] = [
    {
        title: "SentinelPV",
        thumbnail: "/Sentinelpv.png",
        category: "ai",
        description: "SentinelPV is a transolver model that is capable of forecasting 24-hour ahead irradiance of a set of photovoltaic panel using only a subset of such panels",
        link: "",
    },
    {
        title: "Stiflix",
        thumbnail: "/Stiflix.mp4",
        description: "Stiflix is a streaming website that offers the possibility to watch movies for free and have an account to save watched movies.",
        category: "web",
        link: "https://github.com/stivengjinaj/StiFlix"
    },
    {
        title: "CarRental",
        thumbnail: "/CarRental.mp4",
        description: "CarRental is a web application used by clients do car reservations with integrated Paypal payments. It is also used by the CarRental staff to manage maintenances, updates and reservations.",
        category: "web",
        link: "https://github.com/stivengjinaj/CarRental"
    },
    {
        title: "FantaShow",
        thumbnail: "/Fantashow.mp4",
        description: "Fantashow is a web application used to manage a football competition. It allows users to register based on a referral link system that rewards users. The competition consists in collecting points and coins to earn different rewards",
        category: "web",
        link: "https://github.com/stivengjinaj/fantashow"
    },
    {
        title: "Out of Kilter",
        thumbnail: "/OOK.mp4",
        description: "The out-of-kilter algorithm is a primal-dual algorithm. It adjusts edges working on the primal problem and the nodes working on the dual problem in order to find a feasible solution, and then to optimize the problem.",
        category: "optimisation",
        link: "https://github.com/stivengjinaj/Out-of-kilter"
    },
    {
        title: "Archiumion",
        thumbnail: "/Archiumion.mp4",
        description: "Archiumion is an Android social network designed for architects to share their work. A community where architects can connect with each other and help each other.",
        category: "mobile",
        link: "https://github.com/stivengjinaj/StiFlix"
    },
    {
        title: "ItaLearn",
        thumbnail: "ItaLearn2.png",
        description: "ItaLearn is an Android application that targets users in immigration contexts and helps the learn the very basics of italian language easily. It also offers emergency help phrases that might be useful in different contexts.",
        category: "mobile",
        link: "https://github.com/stivengjinaj/Language_App"
    },
    {
        title: "Horus",
        thumbnail: "Horus.png",
        category: "mobile",
        description: "Horus is a WearOS application used to produce different flashlight modes on user's WearOS smartwatch.",
        link: "https://github.com/stivengjinaj/Horus"
    }
]

export const professionalData: JobProps[] = [
    {
        date: "23 June 2026 - Present",
        jobTitle: "Research Fellow (AI & Data Science)",
        company: "Politecnico di Torino",
        description: "Integrate AI in energetics. Handling of the AI core of the project, by building, training, validating and deploying."
    },
    {
        date: "February 2025 - September 2025",
        jobTitle: "Full Stack Developer",
        company: "Freelance",
        description: "Designed a full-stack platform for online competitions, implementing algorithms for dynamic score calculation and referral systems."
    },
    {
        date: "October 2025",
        jobTitle: "Hackathon Participant - TinyHack",
        company: "Focoos AI, Z-Ant, Arduino",
        description: "Developed an end-to-end Edge AI system for real-time image classification on Arduino Nicla Vision"
    }
]