import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarConfiguration } from '../configuration/configuration';
import { CustomizerService } from '../customization-service';

@Component({
  selector: 'app-car-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.html', 
  styleUrl: './preview.css'        
})
export class CarPreviewComponent implements OnInit, OnChanges {
  @Input() config: CarConfiguration | null = null;
  
  angles = ['front', 'side', 'rear', 'interior'];
  currentAngle = 'side';
  currentImageUrl = '';

  constructor(private customizerService: CustomizerService) {}

  ngOnInit() {
    this.updateImageUrl();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config']) {
      this.updateImageUrl();
    }
  }

  changeAngle(angle: string) {
    this.currentAngle = angle;
    this.updateImageUrl();
  }

  updateImageUrl() {
    if (this.config) {
      this.currentImageUrl = this.customizerService.getCarImageUrl(this.config, this.currentAngle);
    } else {
      this.currentImageUrl = '/placeholder.png';
    }
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/placeholder.png';
    console.warn('Image not found:', this.currentImageUrl);
  }
}