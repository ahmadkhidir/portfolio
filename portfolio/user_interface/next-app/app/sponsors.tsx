"use client"

import { Manrope } from "next/font/google";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules";

const MySponsors = () => {
    return (
        <section id="sponsors" className="flex flex-row gap-14 mx-4 py-[60px] border-y border-y-[#403e44] [--swiper-wrapper-transition-timing-function:linear]">
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: sponsors.length - 1,
                    },
                }}
                className="px-4"
                autoplay={{ delay: 0 }}
                modules={[Autoplay]}
                allowTouchMove={false}
                loop
                speed={3000}
            >{
                    sponsors.map((sponsor, index) => (
                        <SwiperSlide key={index} className="w-auto">
                            <Image
                                src={sponsor.url}
                                alt={sponsor.alt}
                                width={300}
                                height={100}
                                className={`w-auto h-6`}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}


const sponsors = [
    {
        url: "/images/sponsor-1.svg",
        alt: "sponsor-1",
    },
    {
        url: "/images/sponsor-2.svg",
        alt: "sponsor-2",
    },
    {
        url: "/images/sponsor-3.svg",
        alt: "sponsor-3",
    },
    {
        url: "/images/sponsor-4.svg",
        alt: "sponsor-4",
    },
    {
        url: "/images/sponsor-5.svg",
        alt: "sponsor-5",
    },
    {
        url: "/images/sponsor-6.svg",
        alt: "sponsor-6",
    },
]


export default MySponsors