export interface IRelatedPost {
    id: string;
    created_date: Date | string | null;
    category: { title: string };
    title: string;
    description: string;
    slug: string;
    file: {
        url: string;
    };
}
