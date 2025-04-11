"use client"
import Link from "next/link";
import { BackArrow } from "./Icons";
import { useState } from "react";

export const SideNavigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`fixed top-0 right-0 z-50 ${open ? 'translate-x-0' : 'translate-x-9/12 opacity-75'} transition-all duration-300 ease-in-out`}>
            <nav className="rounded-bl-3xl shadow-xl overflow-hidden">
                <div className="text-xl text-peach-puff bg-fiery-red flex pr-2">
                    <button className="px-2 grid place-content-center cursor-pointer outline-none" onClick={() => setOpen(!open)}>
                        <BackArrow className={`transition-all duration-300 ease-in-out ${open ? "scale-100 translate-x-2" : "-scale-100"}`} />
                    </button>
                    <ul className="grid gap-4 p-4">
                        <li className="menu-link"><Link href="#work">My Work</Link></li>
                        <li className="menu-link"><Link href="#about">About me</Link></li>
                        <li className="menu-link"><Link href="#contact">Contact me</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}