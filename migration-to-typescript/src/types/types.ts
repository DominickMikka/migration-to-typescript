export interface INews {
    status: string;
    totalResults: number;
    articles: Array<INew>;
}

export interface INew {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ISources {
    status: string;
    sources: Array<ISource>;
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type Callback<T> = (data: T) => void;
