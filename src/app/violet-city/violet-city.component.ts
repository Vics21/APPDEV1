import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-violet-city',
  standalone: false,
  templateUrl: './violet-city.component.html',
  styleUrl: './violet-city.component.css'
})
export class VioletCityComponent {
leader = 'Falkner';
specialty = 'Flying';
badge = 'Zephyr Badge';
pokemon = 'Pidgey,' + ' Pidgeotto';

}


