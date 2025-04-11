"use client"
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import { GalleryImages } from "@/data/data";
import { motion } from "motion/react";
import { componentVarient } from "./Animations";

export default function PhotoGallery() {
    return (
        <motion.div variants={componentVarient}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop
                modules={[Pagination, Autoplay]}
                className="rounded-2xl shadow-2xl"
            >
                {
                    GalleryImages.map((image, idx) =>
                        <SwiperSlide key={idx}>
                            <Image src={image.image} alt={image.name} width={400} height={400} className="w-full aspect-square object-cover" />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </motion.div>
    )
};