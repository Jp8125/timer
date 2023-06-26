import { FormInput } from "./Form";


export class TextInput extends FormInput<string>{
    override controlType="text";
}