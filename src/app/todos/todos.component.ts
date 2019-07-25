import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos = [
    new Todo(1, 'Learn JavaScript', 'Some Description', new Date(), false),
    new Todo(2, 'Learn Angular', 'Some Description', new Date(), false),
    new Todo(3, 'Learn Java', 'Some Description', new Date(), false),
    new Todo(4, 'Learn Spring', 'Some Description', new Date(), false)
  ];

  constructor( ) { }

  ngOnInit() {
  }

}
