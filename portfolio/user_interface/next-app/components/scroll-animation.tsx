'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePathname } from 'next/navigation';
import { createRef } from 'react'

export const ScrollAnimationRef = createRef<HTMLDivElement>()

gsap.registerPlugin(useGSAP, ScrollTrigger)

function ScrollAnimation() {
    const pathname = usePathname()
    useGSAP(() => {
    }, [pathname])
    return null;
}

export default ScrollAnimation