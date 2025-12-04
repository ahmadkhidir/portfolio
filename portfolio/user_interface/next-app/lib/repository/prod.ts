import {
    ArticleSchema,
    ClientReviewSchema,
    ProjectSchema,
    ServiceSchema,
    StackSchema,
    ContactMessageSchema,
} from "../schema/schema";
import z from "zod";
import PortfolioRepository from "./base";

export default class PortfolioRepositoryProd extends PortfolioRepository {
    getProjects = async () => {
        const response = await this.fetch('/api/projects', {
            method: 'GET',
        });
        const data = z.array(ProjectSchema).parse(await response.json());
        return data;
    };
    getReviews = async () => {
        const response = await this.fetch('/api/reviews', {
            method: 'GET',
        });
        const data = z.array(ClientReviewSchema).parse(await response.json());
        return data;
    }
    getArticles = async () => {
        const response = await this.fetch('/api/articles', {
            method: 'GET',
        });
        const data = z.array(ArticleSchema).parse(await response.json());
        return data;
    }
    getServices = async () => {
        const response = await this.fetch('/api/services', {
            method: 'GET',
        });
        const data = z.array(ServiceSchema).parse(await response.json());
        return data;
    }
    getArticleById = async (id: number) => {
        const response = await this.fetch(`/api/articles/${id}`, {
            method: 'GET',
        });
        const data = ArticleSchema.parse(await response.json());
        return data;
    }
    getProjectById = async (id: number) => {
        const response = await this.fetch(`/api/projects/${id}`, {
            method: 'GET',
        });
        const data = ProjectSchema.parse(await response.json());
        return data;
    }
    getServiceById = async (id: number) => {
        const response = await this.fetch(`/api/services/${id}`, {
            method: 'GET',
        });
        const data = ServiceSchema.parse(await response.json());
        return data;
    }
    sendContactMessage = async (data: z.infer<typeof ContactMessageSchema>) => {
        await this.fetch('/api/contacts/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}