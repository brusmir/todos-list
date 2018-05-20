import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTodos():Observable<Response> {
    let todos;
    if (localStorage.getItem('todos')) {
      let data = JSON.parse(localStorage.getItem('todos'));
      todos = Observable.create(function(obs) {
        obs.next(data);
      });  
    } else {      
      todos = Observable.create(function(obs) {
        obs.next([]);
      });  
    }
    return todos;
  }  

  saveTodo(newTodo) {
    if (localStorage.getItem('todos') === null) {
      let todos = [];
      let todo = {todoName: newTodo, complete: false}; 
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      let todos = JSON.parse(localStorage.getItem('todos'));
      let todo = {todoName: newTodo, complete: false};
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  updateTodo(todo) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let update = todos.map( item => {
      if(item.todoName === todo) {
        item.complete = item.complete === true ? false : true;       
      }    
      return item
    });   
    localStorage.setItem('todos', JSON.stringify(update));  
  }
  
}

