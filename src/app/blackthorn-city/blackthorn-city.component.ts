import { Component } from '@angular/core';

@Component({
  selector: 'app-blackthorn-city',
  standalone: false,
  templateUrl: './blackthorn-city.component.html',
  styleUrl: './blackthorn-city.component.css'
})
export class BlackthornCityComponent {
  leader = 'Whitney';
  specialty = 'Normal';
  badge = 'Plain Badge';
  pokemon = 'Clefairy, ' + 'Miltank';
}
