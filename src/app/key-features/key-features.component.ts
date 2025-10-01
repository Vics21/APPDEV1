import { Component } from '@angular/core';

@Component({
  selector: 'app-key-features',
  standalone: false,
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.css'
})
export class KeyFeaturesComponent {
features = [
  "Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.", 
  "Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.", 
  "Programmable Keys: Assign macros and custom functions to any key with the included software.", 
  "Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.", "Dedicated Media Controls: Easily control music and videos with dedicated media keys."
]
}
