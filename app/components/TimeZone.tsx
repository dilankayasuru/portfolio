"use client"
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const TimeZone = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Colombo' }));
        }, 1000);

        return () => clearInterval(timeInterval);
    }, [])

    return (
        <div className="absolute bottom-0 left-0 p-6">
            <motion.div
                transition={{ type: "easeInOut", delay: 1.7, duration: 0.5 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <p className="font-semibold">Based in Colombo, Sri Lanka</p>
                <p>{time}</p>
            </motion.div>
        </div>
    );
}