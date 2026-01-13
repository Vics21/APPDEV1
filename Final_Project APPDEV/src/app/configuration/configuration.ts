export interface CarConfiguration {
  id?: string;
  maker: string;
  model: string;
  color: CarColor;
  wheels: WheelOption;
  interior?: string;
  extras?: string[];
  basePrice: number;
  totalPrice?: number;
  createdAt?: Date;
}

export interface CarColor {
  name: string;
  hex: string;
  imageFolder: string;
}

export interface WheelOption {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const AVAILABLE_COLORS: CarColor[] = [
  { name: 'Pearl White', hex: '#F8F8FF', imageFolder: 'white' },
  { name: 'Midnight Black', hex: '#0A0A0A', imageFolder: 'black' },
  { name: 'Racing Red', hex: '#DC143C', imageFolder: 'red' },
  { name: 'Ocean Blue', hex: '#1E90FF', imageFolder: 'blue' },
  { name: 'Silver Metallic', hex: '#C0C0C0', imageFolder: 'silver' }
];

export const AVAILABLE_WHEELS: WheelOption[] = [
  { id: 'standard', name: 'Standard 18"', price: 0, imageUrl: '/public/wheels/standard.png' },
  { id: 'sport', name: 'Sport 19"', price: 1500, imageUrl: '/public/wheels/sport.png' },
  { id: 'premium', name: 'Premium 20"', price: 2500, imageUrl: 'public/wheels/premium.png' },
  { id: 'carbon', name: 'Carbon Fiber 21"', price: 4000, imageUrl: 'public/wheels/carbon.png' }
];