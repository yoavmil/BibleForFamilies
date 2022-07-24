import { Component } from '@angular/core';
import { BookTreeService } from '../../Services/book-tree.service';

@Component({
  selector: 'app-books-span',
  templateUrl: './books-span.component.html',
  styleUrls: ['./books-span.component.css']
})
export class BooksSpanComponent {

  constructor(bookTree: BookTreeService) {
    this.bookNames = Array.from(bookTree.bookData, (b) => {
      return b.name.replace("א+ב", "");
    });
  }

  public bookNames: string[];
}
