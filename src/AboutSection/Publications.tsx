import Publication from "./Publication.tsx";

function Publications () {
    return (
        <div className="flex flex-col opacity-90 gap-4 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl rounded-xl p-5">
            <div className="relative flex items-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight ms-5">Publications</h2>
            </div>
            
            <div className="flex items-center">
                <Publication
                    title={"Sentinel-Conditioned 24-Hour-Ahead Irradiance Forecasting over Distributed Photovoltaic Fleets"}
                    conference={"ML4EMS@ECML PKDD 2026"}
                    link={"/SentinelPV_ECML_Workshops.pdf"}
                />
            </div>
        </div>
    )
}

export default Publications;