import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  addTask, decrement, deleteTask, increment, updateTask } from '../actions/counter.action';
import { Task } from '../User';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  count$: Observable<number>;
  constructor(private store1: Store<{ count: number }>,private store: Store<{ tasks: Task[] }>) {
    this.count$ = store1.select('count');
  }
 
  increment() {
    this.store1.dispatch(increment());
  }
 
  decrement() {
    this.store1.dispatch(decrement());
  }

  addTask(taskTitle: string) {
    const task: Task = {
      id:Math.random().toString(),
      title: taskTitle,
      completed: false
    };
    this.store.dispatch(addTask({ task }));
  }

  updateTask(task: Task) {
    this.store.dispatch(updateTask({ task }));
  }

  deleteTask(taskId: string) {
    this.store.dispatch(deleteTask({ taskId }));
  }

  getTasks() {
    return this.store.select('tasks');
  }
}
