
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, addUser, removeUser } from '../actions/counter.action';
import { Users } from '../User';
import { omit } from '@ngrx/store/src/utils';

export const initialState = 0;
export const uservalue:Array<Users>= [];

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);


export const userReducer = createReducer(
  uservalue,
  on(addUser, (state,users) => {
    const temp:Users[]=state;
     let demo=[...temp,users]
     return demo;
  }),
  on(removeUser, (state,users) =>{
   const temp:Users[]=state;
    let index=temp.findIndex(obj=>{obj.id==users.id})
    temp.splice(index,1)
    return temp;
  })
);
