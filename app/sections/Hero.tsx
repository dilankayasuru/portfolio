import { ActionFigure } from "../components/ActionFigure";

export const Hero = () => {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row gap-4 justify-center items-center relative p-6">
            <div className="uppercase font-bold text-7xl md:text-9xl md:text-center md:leading-36 text-shadow-lg cursor-default pointer-events-none md:absolute md:z-20">
                <p>Hey There,</p>
                <p>I&apos;m <span className="outlined-text">Dilanka</span></p>
            </div>
            <ActionFigure />
        </div>
    )
}