import { Component } from '@angular/core';
import { demo } from '../question';
import { QuestionDataService } from '../question-data.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {
 
  count$ = this.counterService.count$;

  constructor(private counterService: QuestionDataService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
  
}
