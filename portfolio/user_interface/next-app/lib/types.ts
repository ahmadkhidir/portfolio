export interface StackProps {
    id: number,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
}


export interface ProjectProps {
    id: number,
    image: {
        url: string,
        alt_text: string,
        id: number,
    },
    title: string,
    overview: string,
    content: string,
    created_at: string,
    updated_at: string,
    stacks: StackProps[],
}

export interface ServiceProps {
    heading: string,
    content: string,
}

export interface ClientReviewProps {
    id: number,
    name: string,
    title: string,
    content: string,
    image: {
        url: string,
        alt_text: string,
        id: number,
    },
    company_image: {
        url: string,
        alt_text: string,
        id: number,
    },
    created_at: string,
    updated_at: string,
}

export interface ArticleProps {
    id: number,
    title: string,
    content: string,
    image: {
        url: string,
        alt_text: string,
        id: number,
    },
    created_at: string,
    updated_at: string,
}