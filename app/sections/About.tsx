import Image from "next/image";
import PhotoGallery from "../components/PhotoGallery";
import { Education } from "../components/Education";
import { ProfilePhoto, SelfIntro } from "@/data/data";
import { TechStack } from "../components/TechStack";
import { Socials } from "../components/Socials";

export const About = () => {
    return (
        <div className="px-6 py-16" id="about">
            <p className="text-7xl font-extrabold outlined-text mb-16 md:text-9xl uppercase">About Me</p>
            <div className="columns-1 text-peach-puff text-2xl md:columns-2 lg:columns-3">
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6">
                    <p className="max-w-lg">{SelfIntro}</p>
                </div>
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl mb-6">
                    <Image src={ProfilePhoto} width={440} height={440} alt="profile picture" className="object-cover w-full h-full" />
                </div>
                <Education />
                <TechStack />
                <Socials />
                <PhotoGallery />
            </div>
        </div>
    )
}