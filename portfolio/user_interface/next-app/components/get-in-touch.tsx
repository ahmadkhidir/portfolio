'use client'

import { Anton, Manrope } from 'next/font/google';
import React, { createRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import Link from 'next/link';

function GetInTouch() {
    const ref = createRef<HTMLElement>();

    useGSAP(() => {
        const section = ref.current;
        const thumb = section?.querySelector('.thumb') as HTMLElement

        const handleMouseMove = (event: MouseEvent) => {
            console.log("X", event.clientX)
            if (thumb && section) {
                gsap.to(thumb, {
                    x: event.clientX - section.getBoundingClientRect().left - thumb.offsetWidth / 2,
                    duration: 0,
                    ease: 'power3.out'
                });
            }
        };

        const handleMouseLeave
            = (event?: MouseEvent) => {
                if (thumb && section) {
                    gsap.to(thumb, {
                        x: section.offsetWidth / 2 - thumb.offsetWidth / 2,
                        duration: 0.5,
                        ease: 'power3.out'
                    });
                }
            };

        // Put the thumb to center by default
        handleMouseLeave()


        section?.addEventListener('mousemove', handleMouseMove);
        section?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            section?.removeEventListener('mousemove', handleMouseMove);
            section?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className={`flex z-10 relative sm:pt-36 pt-48 pb-28`}>
            <section ref={ref} className='w-fit mx-auto relative'>
                <h2 className={`xl:text-[150px] lg:text-[140px] md:text-[100px] text-6xl uppercase leading-tight tracking-[-4px] whitespace-nowrap [font-family:var(--font-anton)]`}>Let’s Collaborate</h2>
                <Link href={"/contact"} className="thumb uppercase sm:text-3xl text-xl tracking-wide sm:w-[300px] w-[200px] sm:h-[300px] h-[200px] flex items-center justify-center bg-blue-600 rounded-full absolute sm:bottom-[calc(50%-150px)] bottom-[calc(50%-100px)]">get in touch</Link>
            </section>
        </section>
    );
}

export default GetInTouch;