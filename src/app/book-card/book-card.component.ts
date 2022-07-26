import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customStyle = {
    color: 'red',
  };

  @Input() content: Book = {
    title: '',
    author: '',
    abstract: '',
  };
}
