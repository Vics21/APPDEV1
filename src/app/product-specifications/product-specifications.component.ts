import { Component } from '@angular/core';

@Component({
  selector: 'app-product-specifications',
  standalone: false,
  templateUrl: './product-specifications.component.html',
  styleUrl: './product-specifications.component.css'
})
export class ProductSpecificationsComponent {
switchType= "Cherry MX Red (Mechanical)";
keyLayout= "Full-size (104 keys)";
backlighting= "RGD with cuztomizable colors";
connectivity= "Wired (USB 2.0)";
dimensions= "440mm x 135mm x 35mm";
weight= "1.2 kilograms";
cablelength= "1.8 meters";
additionalFeatures= ["Anti-ghosting", "N-Key rollover", "Dedicated Media Controls"];
inTheBox= ["KB-X1000 Keyboard",
"USB Cable",
"User Manual",
"Keycap Removal Tool",
"Warranty Card"
]
}
