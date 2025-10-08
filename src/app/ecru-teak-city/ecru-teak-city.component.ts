import { Component } from '@angular/core';

@Component({
  selector: 'app-ecru-teak-city',
  standalone: false,
  templateUrl: './ecru-teak-city.component.html',
  styleUrl: './ecru-teak-city.component.css'
})
export class EcruTeakCityComponent {
  leader = 'Chuck';
  specialty = 'Fighting';
  badge = 'Storm Badge';
  pokemon = 'Primeape, ' + 'Poliwrath';
}
