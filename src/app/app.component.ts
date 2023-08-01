import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNgAstro';
  dialogVisible = false;
  options = [
    {
      name: 'Test',
    },
    {
      name: 'Test2'
    },
    {
      name: 'Test3'
    }
  ]
}
