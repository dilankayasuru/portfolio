"use client"
import dynamic from "next/dynamic";
import Loading from "../loading";
import { ActionFigure } from "../components/ActionFigure";
import { TimeZone } from "../components/TimeZone";
import { motion } from "motion/react";

const FloatingIcons = dynamic(() => import("../components/FloatingIcons"), { loading: () => <Loading /> });

export const Hero = () => {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row gap-4 justify-center items-center relative p-6">
            <div className="uppercase font-bold text-7xl mt-16 md:mt-0 md:text-9xl md:text-center md:leading-36 text-shadow-lg cursor-default pointer-events-none md:absolute md:z-20">
                <motion.p
                    transition={{ type: "easeInOut", delay: 0.3, duration: 0.5 }}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}>
                    Hey There,
                </motion.p>
                <motion.p
                    transition={{ type: "easeInOut", delay: 1.25, duration: 0.5 }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}>
                    I&apos;m <span className="outlined-text">Dilanka</span>
                </motion.p>
            </div>
            <ActionFigure />
            <TimeZone />
            <FloatingIcons />
        </div>
    );
}