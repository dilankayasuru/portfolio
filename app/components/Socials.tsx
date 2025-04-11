import { SocialLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const CV_LINK = SocialLinks.cv;
const SOCIALS = SocialLinks.links;

export const Socials = () => {
    return (
        <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6">
            <div className="flex gap-4 flex-wrap items-center">
                {
                    SOCIALS.map((social, idx) =>
                        <Link href={social.link} target="_blank" key={idx} className="bg-peach-puff rounded-lg p-2">
                            <Image src={social.image} width={32} height={32} alt={social.name} className="hover:scale-115 transition-transform duration-300 ease-in-out" />
                        </Link>
                    )
                }
                <Link href={CV_LINK} className="text-lg bg-peach-puff text-fiery-red px-4 py-2 rounded-full active:translate-y-0.5 active:shadow-md duration-300 shadow-xl" download>Download CV</Link>
            </div>
        </div>
    )
}