import {
    ArticleSchema,
    ClientReviewSchema,
    ProjectSchema,
    ServiceSchema,
    StackSchema,
    ContactMessageSchema,
} from "../schema/schema";
import z from "zod";

export default abstract class PortfolioRepository {
    protected fetch: (endpoint: string, init?: RequestInit) => Promise<Response>;
    protected accessToken: string | undefined;
    constructor() {
        this.fetch = async (endpoint: string, init?: RequestInit) => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
                {
                    ...init,
                    headers: {
                        ...(init?.headers || {}),
                        Authorization: this.accessToken
                            ? `Bearer ${this.accessToken}`
                            : "",
                    },
                }
            );
            return response;
        };
    }
    set setAccessToken(token: string) {
        this.accessToken = token;
    }

    abstract getProjects: () => Promise<z.infer<typeof ProjectSchema>[]>;
    abstract getReviews: () => Promise<z.infer<typeof ClientReviewSchema>[]>;
    abstract getArticles: () => Promise<z.infer<typeof ArticleSchema>[]>;
    abstract getServices: () => Promise<z.infer<typeof ServiceSchema>[]>;
    abstract getArticleById: (id: number) => Promise<z.infer<typeof ArticleSchema>>;
    abstract getProjectById: (id: number) => Promise<z.infer<typeof ProjectSchema>>;
    abstract getServiceById: (id: number) => Promise<z.infer<typeof ServiceSchema>>;
    abstract sendContactMessage: (data: z.infer<typeof ContactMessageSchema>) => Promise<void>;
}