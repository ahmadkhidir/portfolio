"use client";

import { ProjectCard } from '@/components/card'
import { ArrowFilledLink } from '@/components/link'
import Title from '@/components/title'
import React, { useContext } from 'react'
import usePromise from "@/lib/hooks/promise";
import PortfolioRepository from '@/lib/repository/base';
import { PortfolioRepositoryContext } from '@/lib/context/context';

function MyProjects() {
    const portfolioRepo = useContext<PortfolioRepository | null>(PortfolioRepositoryContext);
      const {
        data: projects,
        isLoading: projectsLoading,
        error: projectsError,
      } = usePromise(portfolioRepo?.getProjects)

    return (
        <div>
            <Title>My Projects</Title>
            <div className="px-4 flex flex-col gap-[60px]">
                {projects?.map((item, index) => (
                    <ProjectCard key={index} project={item} index={index} />
                ))}
                <div className="action mx-auto mb-[60px]">
                    <ArrowFilledLink href="/projects">Browse All Works</ArrowFilledLink>
                </div>
            </div>
        </div>
    )
}

export default MyProjects