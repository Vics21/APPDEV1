import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivineCityComponent } from './olivine-city.component';

describe('OlivineCityComponent', () => {
  let component: OlivineCityComponent;
  let fixture: ComponentFixture<OlivineCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlivineCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlivineCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
