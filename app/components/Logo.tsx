"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export const Logo = () => {
    return (
        <motion.div
            className="absolute top-0 left-0 z-50 p-6 mix-blend-multiply"
            transition={{ type: "easeInOut", delay: 1.7, duration: 0.5 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}>
            <Link href="#">
                <Image src="/images/logo.webp" width={44} height={44} alt="logo" />
            </Link>
        </motion.div>

    )
}