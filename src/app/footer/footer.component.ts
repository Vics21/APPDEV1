import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Date = new Date().getFullYear();
  Author = "Christian Victori";
  Major = "Bachelor of Science in Computer Science";
  School = "University of Baguio"
}
