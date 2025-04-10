"use client"
import Link from "next/link";
import { BackArrow } from "./Icons";
import { useState } from "react";

export const SideNavigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center h-screen z-50">
            {/* <div className="w-4 bg-fiery-red h-screen"></div> */}
            <nav className={`rounded-r-3xl shadow-xl overflow-hidden ${open ? 'translate-x-0' : '-translate-x-9/12 opacity-75'} transition-all duration-300 ease-in-out`}>
                <div className="text-xl text-peach-puff bg-fiery-red flex">
                    <ul className="grid gap-4 p-4">
                        <li><Link href="#">My Work</Link></li>
                        <li><Link href="#">About me</Link></li>
                        <li><Link href="#">Contact me</Link></li>
                    </ul>
                    <button className="px-2 grid place-content-center cursor-pointer outline-none" onClick={() => setOpen(!open)}>
                        <BackArrow className={`transition-all duration-300 ease-in-out ${open ? "-scale-100 -translate-x-2" : "scale-100"}`} />
                    </button>
                </div>
            </nav>
        </div>
    )
}