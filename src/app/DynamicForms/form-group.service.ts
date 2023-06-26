import { Injectable } from '@angular/core';
import { FormInput } from './Form';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {

  constructor() { }
  CreateGroup(formArray:Array<FormInput<string>>){
   let fg:any=[]
    formArray.forEach((obj)=>{
      fg[obj.key]=obj.required==true?new FormControl(obj.value,Validators.required):new FormControl(obj.value)
    })
    return new FormGroup(fg);
  }
}
