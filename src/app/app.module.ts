import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {TodosService} from "./todos/todos.service";
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "./todos/todos.effects";
import {StoreModule} from "@ngrx/store";
import {todos} from "./todos/todos.reducer";
import {TodoComponent} from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({todos}),
    EffectsModule.run(TodosEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
