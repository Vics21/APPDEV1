import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CarSpecs {
  engine: string;
  horsepower: string;
  torque: string;
  transmission: string;
  drivetrain: string;
  acceleration: string;
  topSpeed: string;
  fuelType: string;
  seating: number;
  price: string;
}

interface CarModel {
  Model_Name: string;
  imageUrl: string;
  specs: CarSpecs;
}

interface DisplaySpecs {
  engineType: string;
  maxTorque: string;
  transmission: string;
  fuelType: string;
  topSpeed: string;
  acceleration: string;
  horsepower: string;
  drivetrain: string;
  seating: number;
}

interface SelectedCar {
  brand: string;
  model: string;
  imageUrl: string;
  price: string;
  specs: DisplaySpecs;
}

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comparison.html',
  styleUrls: ['./comparison.css']
})
export class Comparison {
  carDatabase: { [key: string]: CarModel[] } = {
    'TOYOTA': [
      { 
        Model_Name: 'Camry', 
        imageUrl: 'camry.png',
        specs: {
          engine: '2.5L 4-Cylinder',
          horsepower: '203 hp',
          torque: '184 lb-ft',
          transmission: '8-Speed Automatic',
          drivetrain: 'FWD',
          acceleration: '0-60 mph in 7.9s',
          topSpeed: '135 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱2,657,000'
        }
      },
      { 
        Model_Name: 'Supra', 
        imageUrl: 'Supra.png',
        specs: {
          engine: '3.0L Inline-6 Turbo',
          horsepower: '382 hp',
          torque: '368 lb-ft',
          transmission: '8-Speed Automatic',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 3.9s',
          topSpeed: '155 mph',
          fuelType: 'Gasoline',
          seating: 2,
          price: '₱5,552,000'
        }
      },
      { 
        Model_Name: 'Fortuner GRS', 
        imageUrl: 'fortuner.png',
        specs: {
          engine: '2.8L 4-Cylinder Diesel',
          horsepower: '201 hp',
          torque: '369 lb-ft',
          transmission: '6-Speed Automatic',
          drivetrain: '4WD',
          acceleration: '0-60 mph in 10.2s',
          topSpeed: '112 mph',
          fuelType: 'Diesel',
          seating: 7,
          price: '₱2,656,000'
        }
      }
    ],
  
    'HONDA': [
      { 
        Model_Name: 'Civic Type R',
        imageUrl: 'civictyper.png',
        specs: {
          engine: '2.0L Turbocharged I4',
          horsepower: '315 hp',
          torque: '310 lb-ft',
          transmission: '6-Speed Manual',
          drivetrain: 'FWD',
          acceleration: '0-60 mph in 5.0s',
          topSpeed: '169 mph',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱3,870,000'
        }
      },
      { 
        Model_Name: 'City RS',
        imageUrl: 'city.jpg',
        specs: {
          engine: '1.5L Inline-4',
          horsepower: '119 hp',
          torque: '107 lb-ft',
          transmission: 'CVT',
          drivetrain: 'FWD',
          acceleration: '0-60 mph in 10.4s',
          topSpeed: '118 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱1,199,000'
        }
      },
      { 
        Model_Name: 'Brio',
        imageUrl: 'brio.png',
        specs: {
          engine: '1.2L Inline-4',
          horsepower: '89 hp',
          torque: '80 lb-ft',
          transmission: 'CVT / 5-Speed Manual',
          drivetrain: 'FWD',
          acceleration: '0-60 mph in 14.7s',
          topSpeed: '100 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱735,000'
        }
      }
    ],
  
    'FORD': [
      { 
        Model_Name: 'Raptor',
        imageUrl: 'raptor.png',
        specs: {
          engine: '3.5L Twin-Turbo V6',
          horsepower: '450 hp',
          torque: '510 lb-ft',
          transmission: '10-Speed Automatic',
          drivetrain: '4WD',
          acceleration: '0-60 mph in 5.1s',
          topSpeed: '112 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱2,645,000'
        }
      },
      { 
        Model_Name: 'Mustang',
        imageUrl: 'mustang.png',
        specs: {
          engine: '5.0L V8',
          horsepower: '480 hp',
          torque: '415 lb-ft',
          transmission: '6-Speed Manual / 10-Speed Automatic',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 4.1s',
          topSpeed: '155 mph',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱3,499,000'
        }
      },
      { 
        Model_Name: 'Territory',
        imageUrl: 'territory.png',
        specs: {
          engine: '1.5L EcoBoost Turbo',
          horsepower: '160 hp',
          torque: '248 Nm',
          transmission: 'CVT',
          drivetrain: 'FWD',
          acceleration: '0-60 mph in 10.8s',
          topSpeed: '112 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱1,335,000'
        }
      }
    ],
  
    'TESLA': [
      { 
        Model_Name: 'Cybertruck',
        imageUrl: 'cybertruck.png',
        specs: {
          engine: 'Tri-Motor Electric',
          horsepower: '845 hp (est.)',
          torque: '— (EV torque is instant)',
          transmission: 'Single-Speed',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 2.6s',
          topSpeed: '130 mph',
          fuelType: 'Electric',
          seating: 6,
          price: '₱17,000,000'
        }
      },
      { 
        Model_Name: 'Model S',
        imageUrl: 'models.png',
        specs: {
          engine: 'Dual-Motor Electric',
          horsepower: '670 hp',
          torque: '—',
          transmission: 'Single-Speed',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 3.1s',
          topSpeed: '155 mph',
          fuelType: 'Electric',
          seating: 5,
          price: '₱9,000,000'
        }
      },
      { 
        Model_Name: 'Model Y',
        imageUrl: 'modely.png',
        specs: {
          engine: 'Dual-Motor Electric',
          horsepower: '384 hp (est.)',
          torque: '—',
          transmission: 'Single-Speed',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.8s',
          topSpeed: '135 mph',
          fuelType: 'Electric',
          seating: 5,
          price: '₱2,369,000'
        }
      }
    ],
  
    'BMW': [
      { 
        Model_Name: 'M2 Coupe',
        imageUrl: 'm2coupe.png',
        specs: {
          engine: '3.0L Twin-Turbo Inline-6',
          horsepower: '453 hp',
          torque: '406 lb-ft',
          transmission: '6-Speed Manual / 8-Speed Auto',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 4.1s',
          topSpeed: '177 mph (M Driver pkg)',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱5,990,000'
        }
      },
      { 
        Model_Name: 'Z4 Roadster',
        imageUrl: 'z4roadster.png',
        specs: {
          engine: '2.0L Turbo I4 / 3.0L Turbo I6',
          horsepower: '255–382 hp',
          torque: '295–369 lb-ft',
          transmission: '8-Speed Auto',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 3.9–5.2s',
          topSpeed: '155 mph',
          fuelType: 'Gasoline',
          seating: 2,
          price: ' ₱4,990,000'
        }
      },
      { 
        Model_Name: 'i7',
        imageUrl: 'i7.png',
        specs: {
          engine: 'Dual-Motor Electric',
          horsepower: '536 hp',
          torque: '549 lb-ft',
          transmission: 'Single-Speed',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.5s',
          topSpeed: '149 mph',
          fuelType: 'Electric',
          seating: 5,
          price: '₱10,390,000.00'
        }
      }
    ],
  
    'MERCEDES-BENZ': [
      { 
        Model_Name: 'G-Class',
        imageUrl: 'g-class.png',
        specs: {
          engine: '4.0L Twin-Turbo V8',
          horsepower: '416 hp',
          torque: '450 lb-ft',
          transmission: '9-Speed Automatic',
          drivetrain: '4MATIC AWD',
          acceleration: '0-60 mph in 5.6s',
          topSpeed: '130 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱15,999,000'
        }
      },
      { 
        Model_Name: 'Maybach S-Class',
        imageUrl: 'maybachs-class.png',
        specs: {
          engine: '4.0L Twin-Turbo V8',
          horsepower: '496 hp',
          torque: '516 lb-ft',
          transmission: '9-Speed Automatic',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.7s',
          topSpeed: '130 mph',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱27,999,000'
        }
      },
      { 
        Model_Name: 'S-Class',
        imageUrl: 's-class.png',
        specs: {
          engine: '3.0L Turbo I6 / 4.0L V8',
          horsepower: '429–496 hp',
          torque: '384–516 lb-ft',
          transmission: '9-Speed Automatic',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.4–5.1s',
          topSpeed: '130 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱17,890,000'
        }
      }
    ],
  
    'CHEVROLET': [
      { 
        Model_Name: 'Corvette',
        imageUrl: 'corvette.png',
        specs: {
          engine: '6.2L V8',
          horsepower: '495 hp',
          torque: '470 lb-ft',
          transmission: '8-Speed Dual-Clutch',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 2.9s',
          topSpeed: '194 mph',
          fuelType: 'Gasoline',
          seating: 2,
          price: '₱12,571,888'
        }
      },
      { 
        Model_Name: 'Tahoe',
        imageUrl: 'tahoe.png',
        specs: {
          engine: '5.3L V8 / 6.2L V8',
          horsepower: '355–420 hp',
          torque: '383–460 lb-ft',
          transmission: '10-Speed Automatic',
          drivetrain: 'RWD / 4WD',
          acceleration: '0-60 mph in 5.9–7.4s',
          topSpeed: '130 mph',
          fuelType: 'Gasoline',
          seating: 7,
          price: '₱7,702,888'
        }
      },
      { 
        Model_Name: 'Trailblazer',
        imageUrl: 'trailblazer.png',
        specs: {
          engine: '1.3L Turbo I3',
          horsepower: '155 hp',
          torque: '174 lb-ft',
          transmission: 'CVT / 9-Speed Auto',
          drivetrain: 'FWD / AWD',
          acceleration: '0-60 mph in 9.4s',
          topSpeed: '120 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱1,488,888'
        }
      }
    ],

    'NISSAN': [
      { 
        Model_Name: 'Terra',
        imageUrl: 'terra.png',
        specs: {
          engine: '2.5L Turbo Diesel',
          horsepower: '187 hp',
          torque: '450 Nm',
          transmission: '7-Speed Automatic',
          drivetrain: 'RWD / 4WD',
          acceleration: '0-60 mph in 11.2s',
          topSpeed: '110 mph',
          fuelType: 'Diesel',
          seating: 7,
          price: '₱1,969,000'
        }
      },
      { 
        Model_Name: 'Leaf',
        imageUrl: 'leaf.png',
        specs: {
          engine: 'Electric Motor (110–160 kW)',
          horsepower: '147–214 hp',
          torque: '236–250 lb-ft',
          transmission: 'Single-Speed',
          drivetrain: 'FWD',
          acceleration: '0-60 mph in 6.5–8.0s',
          topSpeed: '98 mph',
          fuelType: 'Electric',
          seating: 5,
          price: '₱1,998,000'
        }
      },
      { 
        Model_Name: 'GT-R',
        imageUrl: 'gtr.png',
        specs: {
          engine: '3.8L Twin-Turbo V6',
          horsepower: '565 hp',
          torque: '467 lb-ft',
          transmission: '6-Speed Dual-Clutch',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 2.9s',
          topSpeed: '196 mph',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱12,445,000'
        }
      }
    ],
  
    'AUDI': [
      { 
        Model_Name: 'R8',
        imageUrl: 'r8.png',
        specs: {
          engine: '5.2L V10',
          horsepower: '602 hp',
          torque: '413 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 3.2s',
          topSpeed: '204 mph',
          fuelType: 'Gasoline',
          seating: 2,
          price: '₱13,800,000'
        }
      },
      { 
        Model_Name: 'Q8',
        imageUrl: 'q8.png',
        specs: {
          engine: '3.0L Turbo V6',
          horsepower: '335 hp',
          torque: '369 lb-ft',
          transmission: '8-Speed Automatic',
          drivetrain: 'AWD (Quattro)',
          acceleration: '0-60 mph in 5.6s',
          topSpeed: '155 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱6,250,000'
        }
      },
      { 
        Model_Name: 'E-Tron GT',
        imageUrl: 'etrongt.png',
        specs: {
          engine: 'Dual-Motor Electric',
          horsepower: '469–637 hp',
          torque: '464–612 lb-ft',
          transmission: '2-Speed Auto',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 3.1s',
          topSpeed: '152 mph',
          fuelType: 'Electric',
          seating: 5,
          price: '₱7,383,351'
        }
      }
    ],
  
    'PORSCHE': [
      { 
        Model_Name: '911 Turbo S',
        imageUrl: '911turbos.png',
        specs: {
          engine: '3.8L Twin-Turbo Flat-6',
          horsepower: '640 hp',
          torque: '590 lb-ft',
          transmission: '8-Speed Dual-Clutch',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 2.6s',
          topSpeed: '205 mph',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱24,400,000'
        }
      },
      { 
        Model_Name: 'Cayenne',
        imageUrl: 'cayenne.png',
        specs: {
          engine: '3.0L Turbo V6',
          horsepower: '348 hp',
          torque: '368 lb-ft',
          transmission: '8-Speed Automatic',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 5.7s',
          topSpeed: '154 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱9,000,000'
        }
      },
      { 
        Model_Name: 'Macan',
        imageUrl: 'macan.png',
        specs: {
          engine: '2.0L Turbo I4 / 2.9L Twin-Turbo V6',
          horsepower: '261–434 hp',
          torque: '295–406 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.1–6.0s',
          topSpeed: '167 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱7,000,000'
        }
      }
    ],
  
    'MITSUBISHI': [
      { 
        Model_Name: 'Montero Sport',
        imageUrl: 'monterosport.png',
        specs: {
          engine: '2.4L Turbo Diesel',
          horsepower: '179 hp',
          torque: '430 Nm',
          transmission: '8-Speed Automatic',
          drivetrain: 'RWD / 4WD',
          acceleration: '0-60 mph in 11.0s',
          topSpeed: '112 mph',
          fuelType: 'Diesel',
          seating: 7,
          price: '₱1,568,000'
        }
      },
      { 
        Model_Name: 'Triton',
        imageUrl: 'triton.png',
        specs: {
          engine: '2.4L Diesel Turbo',
          horsepower: '181 hp',
          torque: '430 Nm',
          transmission: '6-Speed Automatic',
          drivetrain: 'RWD / 4WD',
          acceleration: '0-60 mph in 12.0s',
          topSpeed: '103 mph',
          fuelType: 'Diesel',
          seating: 5,
          price: '₱1,152,000'
        }
      },
      { 
        Model_Name: 'Xpander',
        imageUrl: 'xpander.png',
        specs: {
          engine: '1.5L Inline-4',
          horsepower: '103 hp',
          torque: '141 Nm',
          transmission: '4AT / CVT',
          drivetrain: 'FWD',
          acceleration: '0-60 mph in 13.5s',
          topSpeed: '100 mph',
          fuelType: 'Gasoline',
          seating: 7,
          price: '₱1,099,000'
        }
      }
    ],
  
    'LAMBORGHINI': [
      { 
        Model_Name: 'Revuelto',
        imageUrl: 'revuelto.png',
        specs: {
          engine: '6.5L V12 Hybrid',
          horsepower: '1001 hp',
          torque: '793 lb-ft',
          transmission: '8-Speed Dual-Clutch',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 2.5s',
          topSpeed: '217 mph',
          fuelType: 'Hybrid',
          seating: 2,
          price: '₱35,763,168'
        }
      },
      { 
        Model_Name: 'Huracan',
        imageUrl: 'huracan.png',
        specs: {
          engine: '5.2L V10',
          horsepower: '631 hp',
          torque: '443 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          drivetrain: 'RWD / AWD',
          acceleration: '0-60 mph in 2.9s',
          topSpeed: '202 mph',
          fuelType: 'Gasoline',
          seating: 2,
          price: '₱22,000,000'
        }
      },
      { 
        Model_Name: 'Urus',
        imageUrl: 'urus.png',
        specs: {
          engine: '4.0L Twin-Turbo V8',
          horsepower: '657 hp',
          torque: '627 lb-ft',
          transmission: '8-Speed Automatic',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 3.3s',
          topSpeed: '190 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱13,000,000'
        }
      }
    ],

    'SUBARU': [
      { 
        Model_Name: 'BRZ',
        imageUrl: 'brz.png',
        specs: {
          engine: '2.4L Flat-4 NA',
          horsepower: '228 hp',
          torque: '184 lb-ft',
          transmission: '6-Speed Manual / Auto',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 5.4s',
          topSpeed: '140 mph',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱2,609,000'
        }
      },
      { 
        Model_Name: 'WRX STI',
        imageUrl: 'wrxsti.png',
        specs: {
          engine: '2.5L Turbo Flat-4',
          horsepower: '310 hp',
          torque: '290 lb-ft',
          transmission: '6-Speed Manual',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.6s',
          topSpeed: '159 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱2,848,000'
        }
      },
      { 
        Model_Name: 'OUTBACK',
        imageUrl: 'outback.png',
        specs: {
          engine: '2.5L Flat-4 / 2.4L Turbo',
          horsepower: '182–260 hp',
          torque: '176–277 lb-ft',
          transmission: 'CVT',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 6.1–8.8s',
          topSpeed: '130 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱2,580,000'
        }
      }
    ],
  
    'FERRARI': [
      { 
        Model_Name: 'SF90',
        imageUrl: 'sf90.png',
        specs: {
          engine: '4.0L Twin-Turbo V8 Hybrid',
          horsepower: '986 hp',
          torque: '590 lb-ft',
          transmission: '8-Speed Dual-Clutch',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 2.0s',
          topSpeed: '211 mph',
          fuelType: 'Hybrid',
          seating: 2,
          price: '₱58,000,000'
        }
      },
      { 
        Model_Name: 'F12',
        imageUrl: 'f12.png',
        specs: {
          engine: '6.3L V12',
          horsepower: '730 hp',
          torque: '509 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 3.1s',
          topSpeed: '211 mph',
          fuelType: 'Gasoline',
          seating: 2,
          price: '₱23,000,000'
        }
      },
      { 
        Model_Name: 'SP3',
        imageUrl: 'sp3.png',
        specs: {
          engine: '6.5L V12',
          horsepower: '829 hp',
          torque: '514 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 2.7s',
          topSpeed: '211 mph',
          fuelType: 'Gasoline',
          seating: 2,
          price: '₱334,000,000'
        }
      }
    ],
  
    'ROLLS ROYCE': [
      { 
        Model_Name: 'Cullinan',
        imageUrl: 'cullinan.png',
        specs: {
          engine: '6.75L Twin-Turbo V12',
          horsepower: '563 hp',
          torque: '627 lb-ft',
          transmission: '8-Speed Automatic',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.9s',
          topSpeed: '155 mph',
          fuelType: 'Gasoline',
          seating: 5,
          price: '₱58,900,000'
        }
      },
      { 
        Model_Name: 'Phantom',
        imageUrl: 'phantom.png',
        specs: {
          engine: '6.75L Twin-Turbo V12',
          horsepower: '563 hp',
          torque: '664 lb-ft',
          transmission: '8-Speed Automatic',
          drivetrain: 'RWD',
          acceleration: '0-60 mph in 5.1s',
          topSpeed: '155 mph',
          fuelType: 'Gasoline',
          seating: 4,
          price: '₱25,000,000'
        }
      },
      { 
        Model_Name: 'Spectre',
        imageUrl: 'spectre.png',
        specs: {
          engine: 'Dual-Motor Electric',
          horsepower: '577 hp',
          torque: '664 lb-ft',
          transmission: 'Single-Speed',
          drivetrain: 'AWD',
          acceleration: '0-60 mph in 4.4s',
          topSpeed: '155 mph',
          fuelType: 'Electric',
          seating: 4,
          price: '₱23,500,000'
        }
      }
    ]
  };

  brands: string[] = Object.keys(this.carDatabase);
  
  selectedBrand1: string = 'TOYOTA';
  selectedBrand2: string = 'HONDA';
  selectedModel1: string = 'Camry';
  selectedModel2: string = 'Civic Type R';

  showSelector1: boolean = false;
  showSelector2: boolean = false;

  expandedSections: { [key: string]: boolean } = {
    'engine': false,
    'performance': false,
    'features': false
  };

  car1: SelectedCar = {
    brand: 'TOYOTA',
    model: 'Camry',
    imageUrl: 'camry.png',
    price: '₱2,657,000',
    specs: {
      engineType: '2.5L 4-Cylinder',
      maxTorque: '184 lb-ft',
      transmission: '8-Speed Automatic',
      fuelType: 'Gasoline',
      topSpeed: '135 mph',
      acceleration: '0-60 mph in 7.9s',
      horsepower: '203 hp',
      drivetrain: 'FWD',
      seating: 5
    }
  };

  car2: SelectedCar = {
    brand: 'HONDA',
    model: 'Civic Type R',
    imageUrl: 'civictyper.png',
    price: '₱3,870,000',
    specs: {
      engineType: '2.0L Turbocharged I4',
      maxTorque: '310 lb-ft',
      transmission: '6-Speed Manual',
      fuelType: 'Gasoline',
      topSpeed: '169 mph',
      acceleration: '0-60 mph in 5.0s',
      horsepower: '315 hp',
      drivetrain: 'FWD',
      seating: 4
    }
  };

  getModelsForBrand(brand: string): CarModel[] {
    return this.carDatabase[brand] || [];
  }

  openSelector(carNumber: number): void {
    if (carNumber === 1) {
      this.showSelector1 = true;
      this.showSelector2 = false;
    } else {
      this.showSelector2 = true;
      this.showSelector1 = false;
    }
  }

  selectCar(carNumber: number): void {
    if (carNumber === 1) {
      const selectedCarModel = this.carDatabase[this.selectedBrand1].find(
        car => car.Model_Name === this.selectedModel1
      );
      if (selectedCarModel) {
        this.car1 = {
          brand: this.selectedBrand1,
          model: this.selectedModel1,
          imageUrl: selectedCarModel.imageUrl,
          price: selectedCarModel.specs.price,
          specs: {
            engineType: selectedCarModel.specs.engine,
            maxTorque: selectedCarModel.specs.torque,
            transmission: selectedCarModel.specs.transmission,
            fuelType: selectedCarModel.specs.fuelType,
            topSpeed: selectedCarModel.specs.topSpeed,
            acceleration: selectedCarModel.specs.acceleration,
            horsepower: selectedCarModel.specs.horsepower,
            drivetrain: selectedCarModel.specs.drivetrain,
            seating: selectedCarModel.specs.seating
          }
        };
      }
      this.showSelector1 = false;
    } else {
      const selectedCarModel = this.carDatabase[this.selectedBrand2].find(
        car => car.Model_Name === this.selectedModel2
      );
      if (selectedCarModel) {
        this.car2 = {
          brand: this.selectedBrand2,
          model: this.selectedModel2,
          imageUrl: selectedCarModel.imageUrl,
          price: selectedCarModel.specs.price,
          specs: {
            engineType: selectedCarModel.specs.engine,
            maxTorque: selectedCarModel.specs.torque,
            transmission: selectedCarModel.specs.transmission,
            fuelType: selectedCarModel.specs.fuelType,
            topSpeed: selectedCarModel.specs.topSpeed,
            acceleration: selectedCarModel.specs.acceleration,
            horsepower: selectedCarModel.specs.horsepower,
            drivetrain: selectedCarModel.specs.drivetrain,
            seating: selectedCarModel.specs.seating
          }
        };
      }
      this.showSelector2 = false;
    }
  }

  cancelSelection(carNumber: number): void {
    if (carNumber === 1) {
      this.showSelector1 = false;
    } else {
      this.showSelector2 = false;
    }
  }

  toggleSection(section: string): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }
}