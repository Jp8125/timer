import { createAction, props } from '@ngrx/store';
import { Users } from '../User';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

export const addUser=createAction('[add User]',props<Users>());
export const removeUser=createAction('Remove User',props<Users>())
