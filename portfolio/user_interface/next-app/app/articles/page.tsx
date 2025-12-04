"use client"

import { BigTitle } from '@/components/title'
import React, { useContext } from 'react'
import RecentArticle from './recent-article'
import { ArticleCard } from '@/components/card'
import PortfolioRepository from '@/lib/repository/base'
import { PortfolioRepositoryContext } from '@/lib/context/context'
import usePromise from '@/lib/hooks/promise'

function page() {
    const portfolioRepo = useContext<PortfolioRepository | null>(PortfolioRepositoryContext);
    const {
    data: articles,
    isLoading: articlesLoading,
    error: articlesError,
    } = usePromise(portfolioRepo?.getArticles)
  return (
    <div>
      <BigTitle>My Articles</BigTitle>
      <RecentArticle articles={articles ?? []} />
      <BigTitle className='mt-20 sm:mt-36'>More Articles</BigTitle>
      <div className='px-4 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {articles?.map((item, index) => (
              <ArticleCard key={index} {...item} />
          ))}
      </div>
    </div>
  )
}

export default page