import { Component } from '@angular/core';

@Component({
  selector: 'book-details',
  template: `
    <div class="book-details">
      <book-form></book-form>
    </div>
  `,
  styleUrls: ['book-detail.component.css'],
})
export class BookDetailsComponent {}
