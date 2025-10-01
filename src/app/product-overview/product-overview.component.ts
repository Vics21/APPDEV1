import { Component } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  standalone: false,
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css'
})
export class ProductOverviewComponent {
model = "KB X100"
overview = "The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience."
}
