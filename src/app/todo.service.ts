import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId=3
  todolist=[
    {
      id:1,'task':"Task1"
    },
    {
      id:1,'task':"Task2"
    }
  ]
  constructor() { }
    addTodo(taskName:string){
      this.todolist.push({"id":this.taskId++,'task':taskName})
    }
    deleteTodo(index:any){
      this.todolist.splice(index,1)
    }
  
}
