import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <p *ngIf="todos.pending">Loading...</p>
    <todo [todo]="todo"
          *ngFor="let todo of todos.data">
    </todo>
    <p *ngIf="todos.error">{{todos.error}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
  @Input() todos;
  constructor() { }

  ngOnInit() {
  }

}
