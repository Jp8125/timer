import { FormInput } from "./Form";

export class Checkbox extends FormInput<string>{
    override controlType="check";
}