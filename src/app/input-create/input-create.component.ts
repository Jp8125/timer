import { Component,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormInput} from '../DynamicForms/Form'
@Component({
  selector: 'app-input-create',
  templateUrl: './input-create.component.html',
  styleUrls: ['./input-create.component.css']
})
export class InputCreateComponent {
@Input() Form!:FormGroup   
@Input() input!:FormInput<string>

}
