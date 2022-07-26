import { Component } from '@angular/core';
import { BookTreeService } from '../../Services/book-tree.service';

@Component({
  selector: 'app-books-span',
  templateUrl: './books-span.component.html',
  styleUrls: ['./books-span.component.css']
})
export class BooksSpanComponent {

  constructor(bookTree: BookTreeService) {
    for (let book of bookTree.bookData) {
      const name = book.name.replace("א+ב", "");
      this.bookNames.push(name);
      if (book.link)
        this.links.set(name, book.link);
    }
  }

  public bookNames: string[] = [];
  private links: Map<string, string> = new Map();
  public link(name: string): string | undefined {
    return this.links.get(name);
  }
}
