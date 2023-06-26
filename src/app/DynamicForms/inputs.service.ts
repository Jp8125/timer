import { Injectable } from '@angular/core';
import { FormInput } from './Form';
import { Radio } from './RadioButton';
import { TextInput } from './TextInput';
import { DropDown } from './Dropdown';

@Injectable({
  providedIn: 'root'
})
export class InputsService {

  constructor() { }
GetForm(){
  let form:Array<FormInput<string>>=[
    new DropDown({key:'city',name:'City',options:[{key:"1",value:"meghalay"},{key:"2",value:"rahulroy"}],order:1}),
    new TextInput({key:'name',value:'name',order:2,id:'name',required:true,type:'text'}),
    new Radio({
      key: 'gender',
      type: 'radio',
      options: [
        {key: 'Male',  value: 'm'},
        {key: 'Female',  value: 'f'}
      ],
      required: true,
      order: 4
    }),
  ]
  return form.sort((a,b)=>a.order-b.order);
}
}
