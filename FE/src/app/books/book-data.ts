export interface Card {
  title: string;
  paragraphs?: string[];
  iframe?: string; // for adding google maps or so
}

export interface Chapter {
  title: string;
  cards: Card[];
}

export interface BookData {
  chapters: Chapter[];
}
