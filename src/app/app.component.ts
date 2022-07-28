import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client';

  book: Book = {
    title: 'Rumo',
    author: 'Walther Moers',
    abstract: 'A Tale of Rumo the Wolperting',
  };
}
