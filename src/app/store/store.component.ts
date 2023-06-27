import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, decrement, increment } from '../actions/counter.action';
import { Users } from '../User';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  count$: Observable<number>;
   usr:Observable<Array<Users>>
  constructor(private store: Store<{ count: number }>,private str:Store<{user:Array<Users>}>) {
    this.count$ = store.select('count');
    this.usr=str.select('user')
   this.usr.subscribe({
    next:(obj)=>{
      console.log(obj);  
    }
   })
    
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
addData(){
  this.str.dispatch(addUser({id:1,name:'demo',email:'demo@gmail.com',status:'active',gender:'male'}))
}
}
