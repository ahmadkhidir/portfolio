import { ArrowFilledLink, ArrowLink } from "@/components/link";
import Title, { BigTitle } from "@/components/title";
import Image from "next/image";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MyIntro() {
    const intro1Ref = useRef<HTMLDivElement>(null);
    const intro2Ref = useRef<HTMLDivElement>(null);
    const intro3Ref = useRef<HTMLDivElement>(null);
    const actionRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.timeline()
            .fromTo(intro1Ref.current,
                {
                    opacity: 0,
                    scale: 0.7
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: .7,
                }
            ).fromTo(".main-header", {
                y: "-100%"
            },
                {
                    y: "0%",
                    duration: .3,
                },
                "+=0.5"
            ).fromTo(intro2Ref.current,
                {
                    x: "-110%"
                },
                {
                    x: "0%",
                    duration: .5
                },
            ).fromTo(intro3Ref.current,
                {
                    x: "110%"
                },
                {
                    x: "0%",
                    duration: .5
                },
            );
    gsap.fromTo(actionRef.current,
        {
            y: 25,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: .5,
            scrollTrigger: {
                trigger: actionRef.current,
                start: "top 95%",
                end: "bottom top",
                toggleActions: "play none none reverse",
                // scrub: true
            },
        },
    );
    }, []);

    
    return (
        <section>
            <BigTitle ref={intro1Ref}>Ahmad Khidir<br />Software Engineer</BigTitle>
            <section ref={intro2Ref} className="max-w-[365px] px-4 mb-4 sm:mb-0">
                <h3 className={`lg:text-lg text-base leading-tight`}>As a developer, I bring designs to life by delivering top-notch and impactful user experiences.</h3>
            </section>
            <section ref={intro3Ref} className="max-w-[365px] ml-auto px-4 text-right">
                <h3 className={`lg:text-lg text-base leading-tight`}>As an engineer, I craft scalable and efficient solutions that drive innovation and deliver measurable results.</h3>
            </section>
            <section ref={actionRef} className="w-fit mx-auto sm:mt-4 mt-10">
                <ArrowLink href="/contact">Discuss Project</ArrowLink>
            </section>
        </section>
    )
}