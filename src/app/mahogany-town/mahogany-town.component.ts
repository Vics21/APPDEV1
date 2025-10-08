import { Component } from '@angular/core';

@Component({
  selector: 'app-mahogany-town',
  standalone: false,
  templateUrl: './mahogany-town.component.html',
  styleUrl: './mahogany-town.component.css'
})
export class MahoganyTownComponent {
  leader = 'Pryce';
  specialty = 'Ice';
  badge = 'Glacier Badge';
  pokemon = 'Seel, ' + 'Dewgong, ' + 'Piloswine';
}
