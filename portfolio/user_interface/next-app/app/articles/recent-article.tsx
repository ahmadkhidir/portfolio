"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Title from "@/components/title";
import { backendFetch } from "@/lib/fetch";
import { ArticleProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { ArrowFilledLink, ArrowLink } from "@/components/link";
import { RecentArticleCard } from "@/components/card";


const RecentArticle = ({articles}: {articles: ArticleProps[]}) => {
    // const [articles, setArticles] = useState<ArticleProps[]>([])
    // useEffect(() => {
    //     try {
    //         (async () => {
    //             setArticles(await backendFetch('/articles') as ArticleProps[])
    //         })();
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }, [])
    // if (articles.length === 0) {
    //     return null;
    // }
    return (
        <section className='px-4 py-10'>
            <h3 className='text-2xl uppercase font-semibold mb-6'>Recent Articles</h3>
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                className="relative sm:pr-[150px] pr-[50px]"
                autoplay={{ delay: 3000 }}
                modules={[Navigation]}
                allowTouchMove={false}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                {articles.map((item, index) => (
                    <SwiperSlide key={index}>
                        <RecentArticleCard {...item} />
                    </SwiperSlide>
                ))}
                <div className="flex flex-row sm:gap-4 justify-center items-center absolute z-10 bottom-1/2 translate-y-1/2 right-0 sm:right-5">
                    <div className="swiper-button-prev p-5 scale-75 sm:scale-100 rounded-full border border-slate-700 dark:bg-[#15131a] bg-slate-200 hover:bg-blue-600 cursor-pointer">
                        <MdArrowBack size={28} />
                    </div>
                    <div className="swiper-button-next p-5 scale-75 sm:scale-100 rounded-full border border-slate-700 dark:bg-[#15131a] bg-slate-200 hover:bg-blue-600 cursor-pointer">
                        <MdArrowForward size={28} />
                    </div>
                </div>
            </Swiper>
        </section >
    )
}

export default RecentArticle

