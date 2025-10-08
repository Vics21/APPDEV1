import { Component } from '@angular/core';

@Component({
  selector: 'app-golden-rod-city',
  standalone: false,
  templateUrl: './golden-rod-city.component.html',
  styleUrl: './golden-rod-city.component.css'
})
export class GoldenRodCityComponent {
  leader = 'Jasmine';
  specialty = 'Steel';
  badge = 'Mineral Badge';
  pokemon = 'Magnemite, ' + 'Steelix';
}
