import { Component } from '@angular/core';


@Component({
  selector: 'app-instructions',
  standalone: false,
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
instructions = [
  "Unboxing: Carefully remove the keyboard and accessories from the box.",
  "Connecting the Keyboard: Plug the USB cable into an available USB port on your computer. The keyboard should be automatically recognized and ready for use. No additional drivers are required.",
  "Software Installation (Optional): Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting. Follow the on-screen instructions to install the software.",
  "Keycap Removal and Replacement: Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement. Replace keycaps by aligning them over the switch and pressing down until they click into place."
]
}
