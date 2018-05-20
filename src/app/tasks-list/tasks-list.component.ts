import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from './service/tasks.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  userForm: FormGroup;  
  todos;
  fullFill: number = 0;
  notFill: number = 0;
  @Output() onNumberChanges = new EventEmitter();

  constructor( private tasksService: TasksService, private fb: FormBuilder ) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.tasksService.getTodos().subscribe(val => this.todos = val);  
    setTimeout(() => {       
      this.numberOfTodos()          
    }, 10);    
    setInterval(() => {
      this.createRandomTodo();
    }, 20000);    
  }

  saveTodo() {    
    this.tasksService.saveTodo(this.userForm.value.name);
    this.tasksService.getTodos().subscribe(val => this.todos = val);
    // this.userForm.reset();    

    this.notFill += 1;
    this.onNumberChanges.emit({fullFill: this.fullFill, notFill: this.notFill });

    document.getElementById('userInput').blur();
  }

  updateTodo(todo) {
    this.tasksService.updateTodo(todo);
    this.tasksService.getTodos().subscribe(val => this.todos = val); 
    this.numberOfTodos();
  }

  numberOfTodos() {
    let newValueForFull = 0;
    let newValueForEmpty = 0;
    this.todos.forEach( item => {
      if (item.complete === true) {
        newValueForFull += 1;        
      } else {
        newValueForEmpty += 1;       
      }
    })
    this.fullFill = newValueForFull;
    this.notFill = newValueForEmpty;
    this.onNumberChanges.emit({fullFill: this.fullFill, notFill: this.notFill });
  }

  createRandomTodo() {    
    let randomNumber = Math.floor(Math.random() * 100);
    let name = 'Todo' + randomNumber;

    let check = true;

    this.todos.forEach(item => {
      if(item.todoName === name){
        alert('This name exist'); 
        check = false;       
      }
    })

    if(check){
      this.tasksService.saveTodo(name);   
      this.tasksService.getTodos().subscribe(val => this.todos = val); 
    }          
    this.numberOfTodos();
  }   

}
