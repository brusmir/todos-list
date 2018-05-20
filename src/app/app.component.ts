import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  fullFill: number;
  notFill: number;

  onNumberChanges(numbers) {
    if(numbers) {
      this.fullFill = numbers.fullFill;
      this.notFill = numbers.notFill;
    }   
  }
}
