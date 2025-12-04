import { ArrowFilledLink, ArrowLink } from "@/components/link";
import Title, { BigTitle } from "@/components/title";
import Image from "next/image";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MyAbout() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const moreAboutRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.fromTo(aboutRef.current,
            {
                opacity: 0,
                x: "-100%"
            },
            {
                opacity: 1,
                x: "0%",
                duration: 1,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 90%",
                    end: "bottom bottom",
                    scrub: true,
                }
            },
        );

        gsap.fromTo(moreAboutRef.current,
            {
                opacity: 0,
                // x: "-100%"
            },
            {
                opacity: 1,
                // x: "0%",
                duration: 1,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 90%",
                    end: "bottom bottom",
                    scrub: true,
                }
            },
        )
    }, []);

    
    return (
        <section>
            <Title id="about">About Me</Title>
            <div className="flex sm:flex-row flex-col xl:gap-[150px] lg:gap-[100px] sm:gap-[50px] gap-6 px-4">
            <section ref={aboutRef} className="flex-grow-0 flex-shrink sm:basis-[240px] sm:mt-14">
                {/* <div className="w-full h-[200px] bg-red-300" /> */}
                <Image
                src="/images/ahmad_khidir.jpg"
                alt="ahmad khidir"
                width={500}
                height={500}
                className="sm:w-full w-[200px] h-[200px] float-left sm:float-none mr-4 sm:mr-0 mb-4 sm:mb-0 object-cover object-top"
                />
                <p className={`font-light text-base leading-tight sm:mt-8 text-justify`}>Ahmad is a results-driven software developer with 6 years of experience. Since 2019, I’ve helped global brands achieve success through innovative solutions in AI/ML, full-stack development, and backend engineering. I’m passionate about building systems that simplify lives and drive impact.</p>
            </section>
            <section ref={moreAboutRef} className="flex-1 basis-[375px]">
                <h4 className={`text-lg text-blue-600 mb-2`}>More About</h4>
                <p className={`sm:text-[38px] text-[24px] font-semibold tracking-[-1px] leading-snug`}>With 6 years of experience, I specialize in AI/ML, full-stack development, and backend engineering, delivering scalable and user-focused solutions.</p>
                <section className="mt-10 mb-12 flex flex-row sm:gap-20 gap-5 sm:justify-start justify-between">
                <h5 className="w-fit flex flex-col items-center">
                    <span className={`sm:text-[77px] text-[54px] font-bold tracking-widest leading-none`}>23</span>
                    <span className={`sm:text-base text-sm capitalize font-extralight text-gray-400`}>Delivered Projects</span>
                </h5>
                <h5 className="w-fit flex flex-col items-center">
                    <span className={`sm:text-[77px] text-[54px] font-bold tracking-widest leading-none`}>12</span>
                    <span className={`sm:text-base text-sm capitalize font-extralight text-gray-400`}>Awards Won</span>
                </h5>
                <h5 className="w-fit flex flex-col items-center">
                    <span className={`sm:text-[77px] text-[54px] font-bold tracking-widest leading-none`}>10</span>
                    <span className={`sm:text-base text-sm capitalize font-extralight text-gray-400`}>Innovations Built</span>
                </h5>
                </section>
                <section>
                <ArrowFilledLink href="/contact">Get In Touch</ArrowFilledLink>
                </section>
            </section>
            </div>
        </section>
    )
}