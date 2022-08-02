export interface Card {
  title: string;
  paragraphs?: string[];
  iframe?: string; // for adding google maps or so
}

export interface Chapter {
  id: number;
  title: string;
  cards: Card[];
}

export interface BookData {
  chapters: Chapter[];
}
