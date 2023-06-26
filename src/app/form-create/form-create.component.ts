import { Component } from '@angular/core';
import { FormInput } from '../DynamicForms/Form';
import { FormGroup } from '@angular/forms';
import { FormGroupService } from '../DynamicForms/form-group.service';
import { InputsService } from '../DynamicForms/inputs.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent {
inputs!:FormInput<string>[]
group!:FormGroup
constructor(private formservice:FormGroupService,private input:InputsService){
this.inputs=this.input.GetForm()
this.group=this.formservice.CreateGroup(this.inputs)
}
}
