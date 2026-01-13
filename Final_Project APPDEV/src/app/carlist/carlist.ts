import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarsService, CarModel, CarMaker } from '../cars-service';

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './carlist.html',
  styleUrls: ['./carlist.css']
})
export class Carlist implements OnInit {
  carMakers: CarMaker[] = [];
  carModels: CarModel[] = [];
  selectedMaker: string = '';
  selectedCar: CarModel | null = null;
  showSpecs: boolean = false;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carMakers = this.carsService.getCarMakers();
    this.route.queryParams.subscribe(params => {
      const maker = params['maker'];
      const modelName = params['model'];
      if (maker && modelName) {
        this.selectedMaker = maker;
        this.carModels = this.carsService.getModelsForMaker(maker);
        const car = this.carModels.find(m => m.Model_Name === modelName);
        if (car) {
          this.selectedCar = car;
          this.showSpecs = true;
        }
      }
    });
  }

  onMakerChange() {
    if (!this.selectedMaker) {
      this.carModels = [];
      return;
    }
    this.carModels = this.carsService.getModelsForMaker(this.selectedMaker);
    this.selectedCar = null;
    this.showSpecs = false;
    console.log('Showing models for', this.selectedMaker, ':', this.carModels);
  }

  onCarClick(car: CarModel) {
    this.selectedCar = car;
    this.showSpecs = true;
    console.log('Selected car:', car);
  }

  closeSpecs() {
    this.showSpecs = false;
    this.selectedCar = null;
  }
}