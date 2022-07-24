import { Component, OnInit } from '@angular/core';
import { BookTreeService } from '../Services/book-tree.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(bookTree: BookTreeService) {
    this.bookNames = Array.from(bookTree.bookData, (b) => {
      return b.name.replace("א+ב", "");
    });
  }

  public bookNames: string[];
}
