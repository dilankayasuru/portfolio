"use client"
import Link from "next/link";
import { BackArrow } from "./Icons";
import { useState } from "react";
import { motion } from "motion/react";
import { useDisableScroll } from "@/hooks/useDisableScroll";

export const SideNavigation = () => {
    const [open, setOpen] = useState(false);
    const [preventScroll, setPreventScroll] = useState(true);

    useDisableScroll(preventScroll);

    return (
        <div className={`fixed top-0 right-0 z-50 ${open ? 'translate-x-0' : 'translate-x-9/12 opacity-75'} transition-all duration-300 ease-in-out`}>
            <motion.nav className="rounded-bl-3xl shadow-xl overflow-hidden"
                transition={{ type: "easeInOut", delay: 1.7, duration: 0.5 }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onAnimationComplete={() => setPreventScroll(false)}>
                <div className="text-xl text-peach-puff bg-fiery-red flex pr-2">
                    <button className="px-2 grid place-content-center cursor-pointer outline-none" onClick={() => setOpen(!open)}>
                        <BackArrow className={`transition-all duration-300 ease-in-out ${open ? "scale-100 translate-x-2" : "-scale-100"}`} />
                    </button>
                    <ul className="grid gap-4 p-4">
                        <li className="menu-link" onClick={() => setOpen(!open)}><Link href="#work">My Work</Link></li>
                        <li className="menu-link" onClick={() => setOpen(!open)}><Link href="#about">About me</Link></li>
                        <li className="menu-link" onClick={() => setOpen(!open)}><Link href="#contact">Contact me</Link></li>
                    </ul>
                </div>
            </motion.nav>
        </div>
    )
}