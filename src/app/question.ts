export interface Que{
    QuestionID: number,
    Description: string,
    Options:Array<string>,
    Answer: string
}
export interface Answ{
    QuestionID:number
    Description:string
    Answer:string
}
export interface demo{
    Frontend: {
        HTML: Array<String>
        CSS: Array<string>,
        JavaScript: Array<string>
      }
      Backend: {
        PHP: Array<string>,
        SQL:Array<string>,
      }
}