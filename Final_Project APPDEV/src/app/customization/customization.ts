// src/app/customization/customization.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CarPreviewComponent } from '../preview/preview';  
import { CustomizerService } from '../customization-service';
import { CarsService, CarModel } from '../cars-service';
import { 
  CarConfiguration, 
  AVAILABLE_COLORS, 
  AVAILABLE_WHEELS, 
  CarColor, 
  WheelOption 
} from '../configuration/configuration';

@Component({
  selector: 'app-customization',
  standalone: true,
  imports: [CommonModule, CarPreviewComponent],
  templateUrl: './customization.html',
  styleUrl: './customization.css',
})
export class Customization implements OnInit {
  currentConfig: CarConfiguration | null = null;
  availableColors = AVAILABLE_COLORS;
  availableWheels = AVAILABLE_WHEELS;
  carDetails: CarModel | undefined;
  basePrice = 0;
  totalPrice = 0;
  showSaveConfirmation = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customizerService: CustomizerService,
    private carsService: CarsService
  ) {}

  ngOnInit() {
    const maker = this.route.snapshot.paramMap.get('maker') || '';
    const model = this.route.snapshot.paramMap.get('model') || '';
    
    // Get car details from CarsService
    this.carDetails = this.carsService.getCarDetails(maker, model);
    
    if (this.carDetails && this.carDetails.specs) {
      // Parse price from string (remove ₱ and commas)
      const priceString = this.carDetails.specs.price.replace(/[₱,]/g, '');
      this.basePrice = parseFloat(priceString) || 0;
      
      // Initialize configuration with actual car price
      this.customizerService.initializeConfiguration(maker, model, this.basePrice);
    } else {
      // Fallback if car not found
      this.basePrice = 35000;
      this.customizerService.initializeConfiguration(maker, model, this.basePrice);
    }
    
    // Subscribe to configuration changes
    this.customizerService.configuration$.subscribe(config => {
      this.currentConfig = config;
      if (config) {
        this.totalPrice = config.totalPrice || this.basePrice;
      } else {
        this.totalPrice = this.basePrice;
      }
    });
  }

  selectColor(color: CarColor) {
    if (this.currentConfig) {
      this.customizerService.updateColor(color);
    }
  }

  selectWheels(wheels: WheelOption) {
    if (this.currentConfig) {
      this.customizerService.updateWheels(wheels);
    }
  }

  saveConfig() {
    if (this.currentConfig) {
      this.customizerService.saveConfiguration();
      this.showSaveConfirmation = true;
      setTimeout(() => {
        this.showSaveConfirmation = false;
      }, 3000);
    }
  }

  goBack() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  onWheelImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/placeholder.png';
  }

  formatPrice(price: number): string {
    return '₱' + price.toLocaleString();
  }
}