import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nestedNgForLoop';
  prop = [{ name: 'test', values: ['a', 'b', 'c', 'd', 'e'] }, { name: 'test2', values: [5, 6, 7] }];


}
