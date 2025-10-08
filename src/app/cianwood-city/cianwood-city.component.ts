import { Component } from '@angular/core';

@Component({
  selector: 'app-cianwood-city',
  standalone: false,
  templateUrl: './cianwood-city.component.html',
  styleUrl: './cianwood-city.component.css'
})
export class CianwoodCityComponent {
  leader = 'Morty';
  specialty = 'Ghost';
  badge = 'Fog Badge';
  pokemon = 'Gastly, ' + 'Haunter, ' + 'Gengar';
}
