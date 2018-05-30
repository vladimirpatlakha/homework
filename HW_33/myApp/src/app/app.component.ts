import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//export class AppComponent {
//  title = 'app';
//}

export class AppComponent {
  result: number;

  Calculate(value1, value2) {
    this.result = parseInt(value1) + parseInt(value2);
  }

}
