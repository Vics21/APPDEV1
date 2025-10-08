import { Component } from '@angular/core';

@Component({
  selector: 'app-azalea-town',
  standalone: false,
  templateUrl: './azalea-town.component.html',
  styleUrl: './azalea-town.component.css'
})
export class AzaleaTownComponent {
  leader = 'Bugsy';
  specialty = 'Bug';
  badge = 'Hive Badge';
  pokemon = 'Metapod, ' + 'Kakuna, ' + ' Scyther';
}
