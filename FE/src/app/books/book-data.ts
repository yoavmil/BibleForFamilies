export interface Card {
    title: string;
    paragraphs: string[];
}

export interface Chapter {
    title: string;
    cards: Card[];
}

export interface BookData {
    chapters: Chapter[];
    active: number;
}
