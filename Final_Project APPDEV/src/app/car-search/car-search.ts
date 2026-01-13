import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService, CarModel, CarSpecs } from '../cars-service';

interface SearchResult {
  maker: string;
  model: CarModel;
}

@Component({
  selector: 'app-car-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-search.html',
  styleUrls: ['./car-search.css']
})
export class CarSearch {
  isSearchOpen: boolean = false;
  searchQuery: string = '';
  searchResults: SearchResult[] = [];
  
  constructor(
    private carsService: CarsService,
    private router: Router
  ) {}
  
  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchQuery = '';
      this.searchResults = [];
    }
  }
  
  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }
    
    this.searchResults = this.carsService.searchModels(this.searchQuery);
  }
  
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }

  selectCar(result: SearchResult) {
    console.log('Selecting car:', result.maker, result.model.Model_Name);
    
    // Navigate to carlist page with query parameters
    this.router.navigate(['/carlist'], {
      queryParams: {
        maker: result.maker,
        model: result.model.Model_Name
      }
    }).then(success => {
      console.log('Navigation success:', success);
    }).catch(error => {
      console.error('Navigation error:', error);
    });
    
    // Close the search and clear results
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
}