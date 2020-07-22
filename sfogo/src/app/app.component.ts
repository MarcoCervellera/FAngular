import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  changeColor(id: string, color:string){
    document.getElementById(id).style.color = color;
  }
  cliccato() {
    this.changeColor("mondo", "blue");
  }
  title = 'sfogo';
}
