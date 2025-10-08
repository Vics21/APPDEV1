import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenRodCityComponent } from './golden-rod-city.component';

describe('GoldenRodCityComponent', () => {
  let component: GoldenRodCityComponent;
  let fixture: ComponentFixture<GoldenRodCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoldenRodCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenRodCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
