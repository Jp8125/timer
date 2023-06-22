import { Injectable } from '@angular/core';
import { Answ, Que } from './question';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {
    Ansewrs:Array<Answ>=[]
  constructor(private http:HttpClient) { }
  data(){
   return  this.http.get<Array<Que>>('./assets/t.json');
  }
  private countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public count$: Observable<number> = this.countSubject.asObservable();

  increment() {
    this.countSubject.next(this.countSubject.value + 1);
  }

  decrement() {
    this.countSubject.next(this.countSubject.value - 1);
  }

  reset() {
    this.countSubject.next(0);
  }
}
