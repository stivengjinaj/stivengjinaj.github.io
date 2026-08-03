import type {ProjectType} from "../types/types.ts";
import {useState} from "react";
import Project from "./Project.tsx";
import {projects} from "../types/data.ts";


function MainComponent () {
    const [projectCategory, setProjectCategory] = useState<ProjectType>('all');

    const handleCategoryChange = (category: string) => {
        setProjectCategory(category as ProjectType);
    }

    return (
        <>
            <div className="flex items-start mt-5 gap-2">
                <button
                    onClick={() => handleCategoryChange('all')}
                    className={`${projectCategory !== 'all' && 'hover:bg-gray-300 dark:hover:bg-zinc-800'} leading-tight text-sm rounded-2xl px-3 py-1 ${projectCategory == 'all' ? 'text-white bg-emerald-950 dark:bg-emerald-800' : 'text-gray-800 dark:text-gray-100 bg-transparent'}`}>
                    All Projects
                </button>

                <button
                    onClick={() => handleCategoryChange('ai')}
                    className={`${projectCategory !== 'ai' && 'hover:bg-gray-300 dark:hover:bg-zinc-800'} leading-tight text-sm rounded-2xl px-3 py-1 ${projectCategory == 'ai' ? 'text-white bg-emerald-950 dark:bg-emerald-800' : 'text-gray-800 dark:text-gray-100 bg-transparent'}`}>
                    AI/ML
                </button>

                <button
                    onClick={() => handleCategoryChange('web')}
                    className={`${projectCategory !== 'web' && 'hover:bg-gray-300 dark:hover:bg-zinc-800'} leading-tight text-sm rounded-2xl px-3 py-1 ${projectCategory == 'web' ? 'text-white bg-emerald-950 dark:bg-emerald-800' : 'text-gray-800 dark:text-gray-100 bg-transparent'}`}>
                    Web
                </button>

                <button
                    onClick={() => handleCategoryChange('mobile')}
                    className={`${projectCategory !== 'mobile' && 'hover:bg-gray-300 dark:hover:bg-zinc-800'} leading-tight text-sm rounded-2xl px-3 py-1 ${projectCategory == 'mobile' ? 'text-white bg-emerald-950 dark:bg-emerald-800' : 'text-gray-800 dark:text-gray-100 bg-transparent'}`}>
                    Mobile
                </button>

                <button
                    onClick={() => handleCategoryChange('optimisation')}
                    className={`${projectCategory !== 'optimisation' && 'hover:bg-gray-300 dark:hover:bg-zinc-800'} leading-tight text-sm rounded-2xl px-3 py-1 ${projectCategory == 'optimisation' ? 'text-white bg-emerald-950 dark:bg-emerald-800' : 'text-gray-800 dark:text-gray-100 bg-transparent'}`}>
                    Optimization
                </button>
            </div>
            <div className="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5">
                {projects.filter((project) => {
                    return projectCategory === 'all' || project.category === projectCategory;
                }).map((project) => (
                    <Project
                        title={project.title}
                        thumbnail={project.thumbnail}
                        category={project.category}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </>

    );
}

export default MainComponent;