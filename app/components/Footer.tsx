import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedinIcon } from "./Icons";
import { FooterLinks } from "@/data/data";

export const Footer = () => {
    return (
        <footer className="px-6 text-lg pb-8 flex flex-col md:flex-row items-center gap-8 md:justify-between">
            <p>&copy;{new Date().getFullYear()} Dilanka Yasuru</p>
            <div className="flex items-center gap-4">
                <Link href={FooterLinks.github} target="_blank">
                    <GitHubIcon className="fill-fiery-red" />
                </Link>
                <Link href={FooterLinks.linkedIn} target="_blank">
                    <LinkedinIcon className="fill-fiery-red" />
                </Link>
                <Link href={FooterLinks.instagram} target="_blank">
                    <InstagramIcon className="fill-fiery-red" />
                </Link>
            </div>
        </footer>
    );
}