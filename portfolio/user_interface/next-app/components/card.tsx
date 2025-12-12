"use client";

import React, { useRef } from 'react'
import { ArrowFilledLink } from './link'
import { ArticleProps, ProjectProps } from '@/lib/types'
import Image from 'next/image'
import { BiCalendar } from 'react-icons/bi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ProjectCard: React.FC<{ project: ProjectProps, index: number }> = ({ project, index }) => {
    const projectImage = useRef<HTMLDivElement>(null);
    const projectInfo = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.fromTo(projectImage.current,
            {
                opacity: 0,
                rotate: -25,
                scaleY: 0.8,
                scaleX: 0.8,
                transformOrigin: "bottom left",
            },
            {
                opacity: 1,
                rotate: 0,
                scaleY: 1,
                scaleX: 1,
                transformOrigin: "bottom left",
                duration: 0.7,
                scrollTrigger: {
                    trigger: projectImage.current,
                    start: "top 70%",
                    end: "top 70%",
                    toggleActions: "play play reverse reverse",
                    // scrub: true
                },
            }
        );
        gsap.fromTo(projectInfo.current,
            {
                opacity: 0,
                rotate: 25,
                scaleY: 0.8,
                scaleX: 0.8,
                transformOrigin: "bottom right",
            },
            {
                opacity: 1,
                rotate: 0,
                scaleY: 1,
                scaleX: 1,
                transformOrigin: "bottom right",
                duration: 0.7,
                scrollTrigger: {
                    trigger: projectInfo.current,
                    start: "top 70%",
                    end: "top 70%",
                    toggleActions: "play play reverse reverse",
                    // scrub: true
                },
            }
        );
    }, [projectImage, projectInfo]);

    return (
        <article className="flex lg:flex-row flex-col gap-[50px] pb-[60px] border-b border-b-[#403e44]">
            <div ref={projectImage} className={`flex-1 h-auto`}>
                <Image
                    src={project.image.url}
                    alt={project.image.alt_text}
                    width={500}
                    height={500}
                    className='w-full h-[300px] lg:h-full object-cover object-center'
                />
            </div>
            <div ref={projectInfo} className="flex-1">
                <h3>
                    <div className={`text-[#403e44] text-[120px] leading-tight tracking-[2.4px] lg:mb-[70px] mb-[8px]`}>{index + 1}</div>
                    <div className={`mb-6 uppercase text-[38px] tracking-[-1px] font-bold leading-tight`}>{project.title}</div>
                </h3>
                <p className={`font-light text-base leading-tight mb-9`}>{project.overview}</p>
                <ul className="flex flex-row flex-wrap gap-4 mb-10" aria-label="stacks">
                    {project.stacks.map((citem, cindex) => (
                        <li key={cindex} className={`text-sm border border-[#403e44] rounded-full px-3.5 py-2.5`}>{citem.name}</li>
                    ))}
                </ul>
                <section>
                    <ArrowFilledLink href={`/projects/details/?title=${project.title.toLowerCase().trim().replace(RegExp(" ", "g"), "-")}`}>View Details</ArrowFilledLink>
                </section>
            </div>
        </article>
    )
}


export const RecentArticleCard = (props: ArticleProps) => {
    return (
        <article className="w-full h-[500px] flex flex-col sm:flex-row dark:bg-[#15131a] bg-slate-200 overflow-hidden">
            <div className={`flex-1 overflow-hidden`}>
                <Image
                    src={props.image.url}
                    alt={props.image.alt_text}
                    width={500}
                    height={500}
                    className='w-full h-full object-cover object-center'
                />
            </div>
            <div className={`flex-1 flex flex-col overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:px-10 px-4 sm:py-16 py-4`}>
                <p className='mb-2 flex flex-row items-center gap-2'><BiCalendar size={24} /> {props?.updated_at.split("T").at(0)}</p>
                <h2 className={`mb-3 sm:mb-6 uppercase text-lg sm:text-[38px] tracking-[-1px] font-bold leading-tight`}>{props.title}</h2>
                <p className={`font-light text-base leading-tight flex-1 mb-4 sm:mb-9`}>{props.content}</p>
                <div className="z-10 relative">
                    <ArrowFilledLink href={`/articles/details/?title=${props.title.toLowerCase().trim().replace(RegExp(" ", "g"), "-")}`}>View Details</ArrowFilledLink>
                </div>
            </div>
        </article>
    )
}

export const ArticleCard = (props: ArticleProps) => {
    return (
        <article className="w-full flex flex-col dark:bg-[#15131a] bg-slate-200 overflow-hidden">
            <div className={`flex-1 overflow-hidden`}>
                <Image
                    src={props.image.url}
                    alt={props.image.alt_text}
                    width={500}
                    height={500}
                    className='w-full h-[250px] sm:h-[500px] object-cover object-center hover:scale-105 transition-transform duration-300'
                />
            </div>
            <div className={`flex-1 flex flex-col overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:px-10 px-4 sm:py-16 py-4`}>
                <p className='mb-2 flex flex-row items-center gap-2'><BiCalendar size={24} /> {props?.updated_at.split("T").at(0)}</p>
                <h2 className={`mb-3 sm:mb-6 uppercase text-lg sm:text-[38px] tracking-[-1px] font-bold leading-tight`}>{props.title}</h2>
                <p className={`font-light text-base leading-tight flex-1 mb-4 sm:mb-9`}>{props.content}</p>
                <div className="z-10 relative">
                    <ArrowFilledLink href={`/articles/details/?title=${props.title.toLowerCase().trim().replace(RegExp(" ", "g"), "-")}`}>View Details</ArrowFilledLink>
                </div>
            </div>
        </article>
    )
}