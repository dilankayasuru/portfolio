import { Projects } from "@/data/data";
import { ProjectCard, TProject } from "../components/ProjectCard";

export const Work = () => {
    return (
        <div className="px-6 py-16" id="work">
            <p className="text-7xl font-extrabold outlined-text mb-16 md:text-9xl uppercase">My Work</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Projects.map((project: TProject, idx) =>
                        <ProjectCard key={idx} {...project} />
                    )
                }
            </div>
        </div>
    )
}