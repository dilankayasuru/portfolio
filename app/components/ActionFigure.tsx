"use client"
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

const ROTATION_RANGE = 15.5;
const HALF_ROTATION_RANGE = 15.5 / 5;

export const ActionFigure = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x);
    const springY = useSpring(y);

    const transform = useMotionTemplate`rotateX(${springX}deg) rotateY(${springY}deg)`;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            transition={{ type: "easeInOut", delay: 0.2, duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="mb-24 md:mb-0">
            <Image
                src="/images/action-figure.webp" width={800} height={800} alt="image of an action figure" className="w-96 rounded-4xl shadow-2xl tralate-z-72"
                style={{
                    transformStyle: "preserve-3d",
                }} />
        </motion.div>
    )
}