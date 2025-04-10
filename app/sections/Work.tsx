import { WorkCard } from "../components/WorkCard";

export const Work = () => {
    return (
        <div className="px-6 py-16">
            <p className="text-7xl font-extrabold outlined-text mb-16 md:text-9xl uppercase">My Work</p>
            <div className="grid grid-cols-3 gap-6">
                <WorkCard image="/images/mockup-1.png" title="Project 1" link="" />
                <WorkCard image="/images/mockup-2.png" title="Project 2" link="" />
                <WorkCard image="/images/mockup-3.png" title="Project 3" link="" />
                <WorkCard image="/images/mockup-4.png" title="Project 4" link="" />
                <WorkCard image="/images/mockup-1.png" title="Project 1" link="" />
                <WorkCard image="/images/mockup-2.png" title="Project 2" link="" />
            </div>
        </div>
    )
}