"use client"
import { useEffect, useState } from "react";

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
            <div>
                <p className="font-semibold">Based in Colombo, Sri Lanka</p>
                <p>{time}</p>
            </div>
        </div>
    );
}