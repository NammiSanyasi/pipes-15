import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  price = 25;
  name = "Nammi"
  dt = new Date();
  obj = {
    name:"nammi"
  }
  num = 26;
  title="Radhe Shyam"
}
