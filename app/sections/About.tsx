"use client"
import Image from "next/image";
import PhotoGallery from "../components/PhotoGallery";
import { Education } from "../components/Education";
import { ProfilePhoto, SelfIntro } from "@/data/data";
import { TechStack } from "../components/TechStack";
import { Socials } from "../components/Socials";
import { motion } from "motion/react";
import { componentVarient, titleVarient } from "../components/Animations";

export const About = () => {
    return (
        <div className="px-6 py-16" id="about">
            <motion.p
                variants={titleVarient}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="text-7xl font-extrabold outlined-text mb-16 md:text-9xl uppercase"
            >
                About Me
            </motion.p>
            <div className="columns-1 text-peach-puff text-2xl md:columns-2 lg:columns-3">
                <motion.div
                    className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6"
                    variants={componentVarient}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}>
                    <p className="max-w-lg">{SelfIntro}</p>
                </motion.div>

                <motion.div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl mb-6"
                    variants={componentVarient}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}>
                    <Image src={ProfilePhoto} width={440} height={440} alt="profile picture" className="object-cover w-full h-full" />
                </motion.div>

                <Education />
                <TechStack />
                <Socials />
                <PhotoGallery />
            </div>
        </div>
    )
}