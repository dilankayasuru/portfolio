"use client"
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, NorthEastIcon } from "./Icons";
import { motion } from "motion/react";
import { componentVarient } from "./Animations";

export type TProject = {
    title: string,
    image: string,
    link: string,
    githubLink?: string,
    tags: string[];
}

export const ProjectCard = (props: TProject) => {
    const { image, title, link, githubLink, tags } = props;
    return (
        <motion.div
            variants={componentVarient}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl relative project-card"
        >
            <Image src={image} width={540} height={540} alt="" className="aspect-square w-full object-cover project-image" />
            <motion.div
                initial={{
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0))",
                }}
                whileHover={{
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0))",
                }}
                transition={{ type: "easeInOut", duration: 0.7 }}
                className="absolute left-0 top-0 p-6 w-full h-full flex flex-col justify-end">
                <div className="flex justify-between items-start mb-4">
                    <p className="text-lg text-peach-puff font-semibold">{title}</p>
                    <div className="flex justify-between items-center gap-2">
                        {
                            githubLink &&
                            <Link href={githubLink} target="_blank" className="p-2 rounded-2xl bg-peach-puff active:translate-y-0.5 active:shadow-md duration-300 shadow-xl">
                                <GitHubIcon fill="#000000" />
                            </Link>
                        }
                        <Link href={link} target="_blank" className="p-2 rounded-2xl bg-peach-puff active:translate-y-0.5 active:shadow-md duration-300 shadow-xl">
                            <NorthEastIcon fill="none" className="fill-fiery-red" />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        tags.map((tag, idx) =>
                            <p key={idx} className="bg-peach-puff px-2 rounded-full">{tag}</p>
                        )
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}