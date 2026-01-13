import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarConfiguration, CarColor, WheelOption, AVAILABLE_COLORS, AVAILABLE_WHEELS } from '../app/configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class CustomizerService {
  private configurationSubject = new BehaviorSubject<CarConfiguration | null>(null);
  public configuration$ = this.configurationSubject.asObservable();

  private readonly STORAGE_KEY = 'saved_car_configurations';

  constructor() {}

  initializeConfiguration(maker: string, model: string, basePrice: number): void {
    const config: CarConfiguration = {
      maker,
      model,
      basePrice,
      color: AVAILABLE_COLORS[0],
      wheels: AVAILABLE_WHEELS[0],
      extras: [],
      totalPrice: basePrice
    };
    this.configurationSubject.next(config);
  }

  updateColor(color: CarColor): void {
    const current = this.configurationSubject.value;
    if (current) {
      this.configurationSubject.next({ ...current, color });
    }
  }

  updateWheels(wheels: WheelOption): void {
    const current = this.configurationSubject.value;
    if (current) {
      const totalPrice = current.basePrice + wheels.price;
      this.configurationSubject.next({ ...current, wheels, totalPrice });
    }
  }

  getCarImageUrl(config: CarConfiguration, angle: string = 'side'): string {
    return `/cars/${config.maker.toLowerCase()}/${config.model.toLowerCase()}/${config.color.imageFolder}/${angle}.jpg`;
  }

  calculateTotalPrice(): number {
    const config = this.configurationSubject.value;
    if (!config) return 0;
    
    return config.basePrice + config.wheels.price;
  }

  saveConfiguration(): void {
    const config = this.configurationSubject.value;
    if (!config) return;

    const savedConfigs = this.getSavedConfigurations();
    const configWithId = {
      ...config,
      id: this.generateId(),
      createdAt: new Date()
    };

    savedConfigs.push(configWithId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(savedConfigs));
  }

  getSavedConfigurations(): CarConfiguration[] {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  }

  loadConfiguration(id: string): void {
    const savedConfigs = this.getSavedConfigurations();
    const config = savedConfigs.find(c => c.id === id);
    if (config) {
      this.configurationSubject.next(config);
    }
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
