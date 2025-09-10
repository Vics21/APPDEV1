import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FFF33', '#FF33F5', '#33FFF5'];
  currentColorIndex = signal(0);
  currentColor = signal(this.colors[0]);

  changeColor(){
    //Calculating the next ondex colors
    const nextIndex = (this.currentColorIndex() + 1) % this.colors.length;
    this.currentColorIndex.set(nextIndex);
    this.currentColor.set(this.colors[nextIndex]);
  }
}
