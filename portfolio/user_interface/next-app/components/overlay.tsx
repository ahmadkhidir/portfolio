'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { BiCollapse, BiMenu } from 'react-icons/bi'
import { ArrowLink } from './link'

// gsap.registerPlugin(useGSAP, ScrollTrigger)

export function OverlayNav() {
    const openNav = () => {
        gsap.fromTo(".nav",
            {
                x: "100%",
                y: "85%",
                scale: 0.1,
            },
            {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.inOut"
            })
    }
    const closeNav = () => {
        gsap.fromTo(".nav",
            {
                x: 0,
                y: 0,
                scale: 1,
            },
            {
                x: "100%",
                y: "85%",
                scale: 0.1,
                duration: 0.5,
                ease: "power2.inOut"
            })
    }

    const r = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (r.current && !r.current.contains(event.target as Node)) {
                if (r.current.style.transform === "translate(0px, 0px)") {
                    closeNav(); // Close the menu if clicking outside
                }
            }
        };

        // Attach listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])


    return (
        <div className='sm:hidden'>
            <button onClick={openNav} className="pl-2 pr-1 h-8 bg-slate-400 dark:bg-slate-700 fixed z-40 right-0 bottom-14 rounded-l-full shadow-lg">
                <BiMenu size={24} />
            </button>
            <div ref={r} className="nav translate-x-full flex flex-col items-center justify-center fixed z-40 right-0 bottom-0 top-0 bg-slate-300 dark:bg-slate-700 w-64 shadow-2xl">
                <div className='h-20 w-full flex'>
                    <button onClick={closeNav} className="text-lg px-2 py-2 mt-auto ml-4 border border-[var(--foreground)] border-dashed">
                        <BiCollapse size={24} />
                    </button>
                </div>
                <nav className="flex-1 flex flex-col justify-center gap-4 text-center">
                    <Link href="/" className="text-lg">Home</Link>
                    <Link href="/#about" className="text-lg">About</Link>
                    <Link href="/#services" className="text-lg">Services</Link>
                    <Link href="/projects" className="text-lg">Projects</Link>
                    <Link href="/articles" className="text-lg">Articles</Link>
                    <Link href="/contact" className="text-lg">Contact</Link>
                </nav>
                <div className='h-20 w-full relative z-10 flex items-center pl-4 bg-slate-400 dark:bg-slate-800'>
                    <ArrowLink href="/contact">Hire Me</ArrowLink>
                </div>
            </div>
        </div>
    )
}