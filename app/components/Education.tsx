"use client"
import { EducationInfo } from "@/data/data";
import { motion } from "motion/react";
import { componentVarient } from "./Animations";

export const Education = () => {
    return (
        <motion.div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6"
            variants={componentVarient}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <p className="mb-4 font-bold">Education</p>
            {
                EducationInfo.map((education, idx) =>
                    <div key={idx} className={`text-lg ${idx !== EducationInfo.length - 1 ? "mb-4" : null}`}>
                        <p className="font-semibold">{education.title}</p>
                        <p>{education.institute}</p>
                        <p>{education.duration}</p>
                    </div>
                )
            }
        </motion.div>
    )
};