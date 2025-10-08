import { Component } from '@angular/core';

@Component({
  selector: 'app-olivine-city',
  standalone: false,
  templateUrl: './olivine-city.component.html',
  styleUrl: './olivine-city.component.css'
})
export class OlivineCityComponent {
  leader = 'Clair';
  specialty = 'Dragon';
  badge = 'Rising Badge';
  pokemon = 'Dragonair, ' + 'Gyarados, ' + 'Kingdra';
}
