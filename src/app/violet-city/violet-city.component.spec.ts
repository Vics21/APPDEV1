import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VioletCityComponent } from './violet-city.component';

describe('VioletCityComponent', () => {
  let component: VioletCityComponent;
  let fixture: ComponentFixture<VioletCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VioletCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VioletCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
