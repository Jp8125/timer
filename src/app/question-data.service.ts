import { Injectable } from '@angular/core';
import { Answ, Que } from './question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {
    Ansewrs:Array<Answ>=[]
  constructor(private http:HttpClient) { }
  data(){
   return  this.http.get<Array<Que>>('./assets/t.json');
  }
}
