"use client";

import { ProjectCard } from '@/components/card'
import { ArrowFilledLink } from '@/components/link'
import Title from '@/components/title'
import React, { useContext, useRef } from 'react'
import usePromise from "@/lib/hooks/promise";
import PortfolioRepository from '@/lib/repository/base';
import { PortfolioRepositoryContext } from '@/lib/context/context';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function MyServices() {
    const portfolioRepo = useContext<PortfolioRepository | null>(PortfolioRepositoryContext);
      const {
        data: services,
        isLoading: servicesLoading,
        error: servicesError,
      } = usePromise(portfolioRepo?.getServices)
    
    const servicesRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        servicesRef.current?.querySelectorAll(".service").forEach((item) => {
                gsap.fromTo(item,
                    {
                        opacity: 0,
                        x: 200
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: .7,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            end: "bottom bottom",
                            // toggleActions: "play play reverse reverse",
                            scrub: true
                        },
                    }
                );
            });

    }, [services]);

    return (
        <section>
        <Title id="services">My Services</Title>
        <div ref={servicesRef} className="px-4">
          {services?.map((item, index) => (
            <article key={index} className="service flex sm:flex-row flex-col gap-[50px] border-b border-[#403e44] py-10">
              <h3 className={`flex-1 uppercase text-[38px] font-bold leading-tight`}>{item.heading}</h3>
              <p className={`flex-1 font-light text-base leading-tight`}>{item.content}</p>
            </article>
          ))}
        </div>
      </section>
    )
}

export default MyServices