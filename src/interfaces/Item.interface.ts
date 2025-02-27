export interface Item {
    id: number;
    title: string;
    body: string;
    reactions?: {
        likes?: number;
        dislikes?: number;
    };
    views?: number;
}
