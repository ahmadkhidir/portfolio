"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Title from "@/components/title";
import { ClientReviewProps } from "@/lib/types";
import { useContext } from "react";
import usePromise from "@/lib/hooks/promise";
import PortfolioRepository from "@/lib/repository/base";
import { PortfolioRepositoryContext } from "@/lib/context/context";


const MyClientReview = () => {
    const portfolioRepo = useContext<PortfolioRepository | null>(PortfolioRepositoryContext);
      const {
        data: reviews,
        isLoading: reviewsLoading,
        error: reviewsError,
      } = usePromise(portfolioRepo?.getReviews)
    return (
        <div>
            <Title id="reviews">My Client Reviews</Title>
            <Swiper
                spaceBetween={34}
                slidesPerView={1}
                breakpoints={{

                    640: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2.5,
                    },
                    1280: {
                        slidesPerView: 3,
                    }
                }}
                className="px-4"
                autoplay={{ delay: 3000 }}
                modules={[Navigation]}
                allowTouchMove={false}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                {/* <SwiperSlide><ClientReviewCard  /></SwiperSlide>
                <SwiperSlide><ClientReviewCard /></SwiperSlide>
                <SwiperSlide><ClientReviewCard /></SwiperSlide>
                <SwiperSlide><ClientReviewCard /></SwiperSlide>
                <SwiperSlide><ClientReviewCard /></SwiperSlide> */}
                {reviews?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ClientReviewCard {...item} />
                    </SwiperSlide>
                ))}
                <div className="flex flex-row gap-4 justify-center items-center py-10">
                    <div className="swiper-button-prev p-5 rounded-full dark:bg-[#15131a] bg-slate-200 hover:bg-blue-600 cursor-pointer">
                        <MdArrowBack size={28} />
                    </div>
                    <div className="swiper-button-next p-5 rounded-full dark:bg-[#15131a] bg-slate-200 hover:bg-blue-600 cursor-pointer">
                        <MdArrowForward size={28} />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default MyClientReview

const ClientReviewCard = (props: ClientReviewProps) => {
    return (
        <article className="w-full h-[375px] flex flex-col dark:bg-[#15131a] bg-slate-200 sm:py-9 py-6 sm:px-7 px-4">
            <div className="flex flex-row sm:pb-6 pb-3 border-b border-b-[#2c2839]">
                <div className="flex-1">
                    <Image
                        src={props.image.url}
                        alt={props.image.alt_text}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-cover object-top rounded-full mb-4"
                    />
                    <h3 className={`text-left sm:mb-2.5 mb-0 uppercase text-xl font-bold tracking-tight`}>{props.name}</h3>
                    <h4 className={`text-left text-base font-light tracking-tight text-[#9b9b9b]`}>{props.title}</h4>
                </div>
                <Image
                    src={props.company_image.url}
                    alt={props.company_image.alt_text}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-cover object-top rounded-full"
                />
            </div>
            <p className={`flex-1 sm:text-xl text-lg overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] font-semibold leading-tight sm:mt-6 mt-3`}>{props.content}</p>
        </article>
    )
}