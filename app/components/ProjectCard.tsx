import Image from "next/image";
import Link from "next/link";
import { NorthEastIcon } from "./Icons";

export type TProject = {
    title: string,
    image: string,
    link: string,
    tags: string[];
}

export const ProjectCard = (props: TProject) => {
    const { image, title, link, tags } = props;
    return (
        <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl relative project-card">
            <Image src={image} width={540} height={540} alt="" className="aspect-square w-full object-cover project-image" />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                <div className="flex justify-between mb-4">
                    <p className="text-lg text-peach-puff font-semibold">{title}</p>
                    <Link href={link} className="p-2 rounded-2xl bg-peach-puff active:translate-y-0.5 active:shadow-md duration-300 shadow-xl">
                        <NorthEastIcon fill="none" className="fill-fiery-red" />
                    </Link>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        tags.map((tag, idx) =>
                            <p key={idx} className="bg-peach-puff px-2 rounded-full">{tag}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}