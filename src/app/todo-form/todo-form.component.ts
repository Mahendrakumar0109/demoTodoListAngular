import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoInput =""
  constructor(private ts:TodoService){}
  ngOnInit(): void {
    
  }
addTask(){
this.ts.addTodo(this.todoInput);
this.todoInput=""
}
resetForm(){
this.todoInput=""
}
}
