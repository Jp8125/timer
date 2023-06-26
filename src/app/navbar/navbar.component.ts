import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.action';
import { state } from '@angular/animations';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sidebarOpened = false;
  count$:Observable<number>;
  a!:number

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
  constructor(private store: Store<{Counter:number}>) {
    this.count$ = this.store.select('Counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

}
