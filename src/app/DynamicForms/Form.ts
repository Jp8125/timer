export class FormInput<T> {
    name: string
    id: string
    type: string
    controlType: string
    order: number
    key: string
    value: T|undefined
    required: boolean
    options: { key: string, value: string }[]
    constructor(option: {
        controlType?: string
        name?: string, id?: string, type?: string, order: number, key?: string, value?: T, required?: boolean, options?: { key: string, value: string }[]
    }) {
        this.name = option.name || ''
        this.id = option.id || ''
        this.type = option.type || ''
        this.order = option.order == undefined ? 1 : option.order
        this.controlType = option.controlType || ''
        this.key = option.key || ''
        this.value = option.value
        this.required = option.required || false
        this.options = option.options || []
    }

}   