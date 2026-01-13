import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carlist } from './carlist/carlist';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CarSearch } from './car-search/car-search';
import { Navbar } from './navbar/navbar';
import { Comparison } from './comparison/comparison';
import { Customization } from './customization/customization';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Carlist,
    HttpClientModule,        
    HttpClientJsonpModule,
    CarSearch,
    Navbar,
    Comparison,
    Customization,

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carsite');
}
