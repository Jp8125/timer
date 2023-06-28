
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, addTask, deleteTask, updateTask } from '../actions/counter.action';
import { Task } from '../User';
import { omit } from '@ngrx/store/src/utils';

export const init = 0;

export const counterReducer = createReducer(
  init,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);


export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(updateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t)
  })),
  on(deleteTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(t => t.id !== taskId)
  }))
);