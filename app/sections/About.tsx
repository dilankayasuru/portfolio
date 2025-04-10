import Image from "next/image";
import Link from "next/link";

export const About = () => {
    return (
        <div className="px-6 py-16">
            <p className="text-7xl font-extrabold outlined-text mb-16 md:text-9xl uppercase">About Me</p>
            <div className="columns-1 text-peach-puff text-2xl md:columns-2 lg:columns-3">
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6">
                    <p className="max-w-lg">Software engineering student specializing in full stack development with expertise in both frontend and backend technologies. Passionate about creating intuitive UI/UX designs that enhance user experience. Explore my projects and skills.</p>
                </div>
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl mb-6">
                    <Image src="/images/photo.jpg" width={440} height={440} alt="" className="object-cover w-full h-full" />
                </div>
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6">
                    <p className="mb-4 font-bold">Education</p>
                    <div className="text-lg mb-4">
                        <p className="font-semibold">BEng (Hons) Software Engineering</p>
                        <p>APIIT Sri Lanka | Staffordshire University, UK</p>
                        <p>July 2023 - Present</p>
                    </div>
                    <div className="text-lg mb-4">
                        <p className="font-semibold">APIIT Lanka Foundation - Computing</p>
                        <p>APIIT Sri Lanka</p>
                        <p>Oct 2022 - June 2023</p>
                    </div>
                    <div className="text-lg mb-4">
                        <p className="font-semibold">GCE Advanced Level - Physical Science</p>
                        <p>D S Senanayake College, Colombo 07</p>
                        <p>May 2019 - Feb 2022</p>
                    </div>
                    <div className="text-lg">
                        <p className="font-semibold">GCE Ordinary Level - 9As</p>
                        <p>Piliyandala Central College</p>
                        <p>Jan 2013 - Dec 2018</p>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6">
                    <p className="mb-4 font-bold">Tech Stack</p>
                    <div className="flex gap-4 flex-wrap">
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/react.svg" width={32} height={32} alt="react js logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/next.svg" width={32} height={32} alt="next js logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/node.svg" width={32} height={32} alt="node js logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/express.svg" width={32} height={32} alt="express js logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/laravel.svg" width={32} height={32} alt="laravel logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/mongo.svg" width={32} height={32} alt="mongodb logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/mysql.svg" width={32} height={32} alt="mysql logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/figma.svg" width={32} height={32} alt="figma logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/tailwind.svg" width={32} height={32} alt="tailwind logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/flutter.svg" width={32} height={32} alt="flutter logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/github.svg" width={32} height={32} alt="github logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/git.svg" width={32} height={32} alt="git logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/linux.svg" width={32} height={32} alt="linux logo" />
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6">
                    <div className="flex gap-4 flex-wrap items-center">
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/linkedin.svg" width={32} height={32} alt="react js logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/instagram.svg" width={32} height={32} alt="next js logo" />
                        </div>
                        <div className="bg-peach-puff rounded-lg p-2">
                            <Image src="/icons/github.svg" width={32} height={32} alt="node js logo" />
                        </div>
                        <Link href="#" className="text-lg bg-peach-puff text-fiery-red px-4 py-2 rounded-full">Download CV</Link>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl mb-6">
                    <Image src="/images/photo.jpg" width={440} height={440} alt="" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}