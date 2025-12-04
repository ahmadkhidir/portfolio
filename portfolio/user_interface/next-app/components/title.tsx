"use client";

import { ReactNode, Ref, useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface TitleProps {
    children: ReactNode,
    className?: string,
    id?: string | undefined,
    ref?: Ref<HTMLHeadingElement> | undefined
}


const Title = (
    // { children, className = "mb-24 mt-52", id = undefined }: { children: ReactNode, className?: string, id?: string | undefined }
    props: TitleProps
) => {
    const headlineRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (props.ref) return;
        gsap.fromTo(headlineRef.current,
            {
                opacity: 0,
                scaleX: 0.7,
                scaleY: 0.7,
            },
            {
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                duration: .7,
                scrollTrigger: {
                    trigger: headlineRef.current,
                    start: "top 85%",
                    end: "bottom 85%",
                    // toggleActions: "play play reverse reverse",
                    scrub: true
                },
            }
        );

    }, []);
    return (
        <div ref={props.ref ?? headlineRef} className={`sm:text-[110px] text-7xl uppercase text-center leading-tight tracking-[-4px] sm:whitespace-nowrap ${props.className ?? "mb-24 mt-52"} [font-family:var(--font-anton)]`}>
            <h2 id={props.id}>{props.children}</h2>
        </div>
    )
}

export const BigTitle = (
    props: TitleProps
) => {
    return (
        <h1 ref={props.ref} id={props.id} className={`intro-1 xl:text-[150px] lg:text-[140px] md:text-[100px] text-7xl uppercase text-center leading-tight tracking-[-4px] sm:whitespace-nowrap mb-10 [font-family:var(--font-anton)] ${props.className}`}>
            {props.children}
        </h1>
    )
}

export default Title