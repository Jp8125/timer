import { Component } from '@angular/core';
import { QuestionDataService } from '../question-data.service';
import { Que } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  time:Date= new Date()
  intev!: ReturnType<typeof setInterval>
  Quests:Array<Que>=[]
  answers:Array<string>=[]
  constructor(private qdata:QuestionDataService){
    this.qdata.data().subscribe(p=>{
      this.Quests=p
      console.log(this.Quests);
      this.time.setHours(0,0,10)
    })
  }
  addans()
  {
    console.log(this.answers);
    
  }
  sub(){
    let score=0;
    clearInterval(this.intev)
    let i=0;
    for (const iterator of this.Quests) {
      this.qdata.Ansewrs.push({QuestionID:iterator.QuestionID,Description:iterator.Description,Answer:this.answers[i]})
      i++;
    }
    this.Quests.map((obj1,i)=>{
      console.log(this.qdata.Ansewrs);
      
      if( this.qdata.Ansewrs.find(obj=>obj.QuestionID==obj1.QuestionID)?.Answer==obj1.Answer)
      {
        score++;
      }
    })
    console.log(this.answers);
    console.log(this.qdata.Ansewrs);
    console.log(score);
    
  }
  start(){
  this.intev=setInterval(()=>{
    this.time.setMilliseconds(-1000)
    console.log(this.time.getMinutes(),this.time.getSeconds());
    if(this.time.getHours()==0 && this.time.getMinutes()==0 && this.time.getSeconds()==0)
    {
      console.log("checked");
      clearInterval(this.intev);
      this.sub();
    }
  },1000)
 
  console.log(typeof this.intev);
  
  }
 
  
}
