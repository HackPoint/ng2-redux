import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class TodosService {

  constructor() {
  }

  getTodos() {
    const todos = [
      {id: 1, title: "Learn ngrx/store", completed: false},
      {id: 2, title: "Learn ngrx/effects", completed: false}]
    return Observable.timer(100).mapTo(todos)
  }

  addTodo(title) {
    return Observable.timer(2000)
    .mapTo({id: Math.random(), title, completed: false});
  }

}
