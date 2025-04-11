"use client"
import { TechStackList } from "@/data/data";
import Image from "next/image";
import { motion } from "motion/react";
import { componentVarient } from "./Animations";

export const TechStack = () => {
    return (
        <motion.div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6"
            variants={componentVarient}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <p className="mb-4 font-bold">Tech Stack</p>
            <div className="flex gap-4 flex-wrap">
                {
                    TechStackList.map((tech, idx) =>
                        <div key={idx} className="bg-peach-puff rounded-lg p-2">
                            <Image src={tech.image} width={32} height={32} alt={tech.name} />
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}