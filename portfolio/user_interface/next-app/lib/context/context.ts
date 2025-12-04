import { createContext } from "react";
import PortfolioRepository from "../repository/base";

export const PortfolioRepositoryContext = createContext<PortfolioRepository | null>(null);