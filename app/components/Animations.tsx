import { Variants } from "framer-motion";

export const titleVarient: Variants = {
    offscreen: {
        opacity: 0,
        x: -100
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
        }
    }
};

export const componentVarient: Variants = {
    offscreen: {
        opacity: 0,
        y: 100,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};