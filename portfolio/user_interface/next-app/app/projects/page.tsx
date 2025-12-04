"use client"

import {ProjectCard} from '@/components/card'
import Title, { BigTitle } from '@/components/title'
import { PortfolioRepositoryContext } from '@/lib/context/context'
import usePromise from '@/lib/hooks/promise'
import PortfolioRepository from '@/lib/repository/base'
import React, { useContext } from 'react'

function page() {
    const portfolioRepo = useContext<PortfolioRepository | null>(PortfolioRepositoryContext);
    const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
    } = usePromise(portfolioRepo?.getProjects)
    return (
        <div>
            <BigTitle>My Projects</BigTitle>
            <div className="px-4 flex flex-col gap-[60px]">
                {projects?.map((item, index) => (
                    <ProjectCard key={index} project={item} index={index} />
                ))}
            </div>
        </div>
    )
}

export default page