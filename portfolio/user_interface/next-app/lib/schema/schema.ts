import z from "zod";


// export interface StackProps {
//     id: number,
//     name: string,
//     description: string,
//     created_at: string,
//     updated_at: string,
// }


// export interface ProjectProps {
//     id: number,
//     image: {
//         url: string,
//         alt_text: string,
//         id: number,
//     },
//     title: string,
//     overview: string,
//     content: string,
//     created_at: string,
//     updated_at: string,
//     stacks: StackProps[],
// }

// export interface ServiceProps {
//     heading: string,
//     content: string,
// }

// export interface ClientReviewProps {
//     id: number,
//     name: string,
//     title: string,
//     content: string,
//     image: {
//         url: string,
//         alt_text: string,
//         id: number,
//     },
//     company_image: {
//         url: string,
//         alt_text: string,
//         id: number,
//     },
//     created_at: string,
//     updated_at: string,
// }

// export interface ArticleProps {
//     id: number,
//     title: string,
//     content: string,
//     image: {
//         url: string,
//         alt_text: string,
//         id: number,
//     },
//     created_at: string,
//     updated_at: string,
// }

export const StackSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

export const ProjectSchema = z.object({
    id: z.number(),
    image: z.object({
        url: z.string(),
        alt_text: z.string(),
        id: z.number(),
    }),
    title: z.string(),
    overview: z.string(),
    content: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    stacks: z.array(StackSchema),
});

export const ServiceSchema = z.object({
    heading: z.string(),
    content: z.string(),
});

export const ClientReviewSchema = z.object({
    id: z.number(),
    name: z.string(),
    title: z.string(),
    content: z.string(),
    image: z.object({
        url: z.string(),
        alt_text: z.string(),
        id: z.number(),
    }),
    company_image: z.object({
        url: z.string(),
        alt_text: z.string(),
        id: z.number(),
    }),
    created_at: z.string(),
    updated_at: z.string(),
});

export const ArticleSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    image: z.object({
        url: z.string(),
        alt_text: z.string(),
        id: z.number(),
    }),
    created_at: z.string(),
    updated_at: z.string(),
});

export const ContactMessageSchema = z.object({
    name: z.string(),
    email: z.email(),
    phone_no: z.string().optional(),
    subject: z.string(),
    message: z.string(),
});