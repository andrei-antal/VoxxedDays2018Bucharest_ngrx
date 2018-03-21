import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BooksService } from './../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'books-component',
  template: `
    <div class="container" fxLayout="column" fxLayoutAlign="center center" >
      <button mat-raised-button routerLink="new">Add new</button>
      <book-item
        *ngFor="let book of books"
        [book]="book"
        (saveComment)="handleCommentSave($event)"
        (deleteBook)="handleDeleteBook($event)"
      ></book-item>
    </div>
  `,
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  handleCommentSave({ comment, bookId }) {}

  handleDeleteBook(bookId) {}
}
