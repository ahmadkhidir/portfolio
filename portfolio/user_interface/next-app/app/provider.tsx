"use client";

import { PortfolioRepositoryContext } from "@/lib/context/context";
import PortfolioRepositoryMock from "@/lib/repository/mock";

export function ContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const portfolioRepo = new PortfolioRepositoryMock();
    return (
        <PortfolioRepositoryContext.Provider value={ portfolioRepo }>
            {children}
        </PortfolioRepositoryContext.Provider>
    )
}