import Image from "next/image";

type TWork = {
    image: string,
    title: string,
    link: string,
}

export const WorkCard = (props: TWork) => {
    const { image, title, link } = props;
    return (
        <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl relative">
            <Image src={image} width={540} height={540} alt="" className="aspect-square w-full object-cover md:opacity-75 hover:opacity-100 hover:scale-105 duration-700 transition-all" />
            <div className="absolute bottom-0 text-peach-puff left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full flex justify-between items-center">
                <p className="text-lg">{title}</p>
                <p className="text-lg">{title}</p>
            </div>
        </div>
    )
}