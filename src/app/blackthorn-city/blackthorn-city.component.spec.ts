import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackthornCityComponent } from './blackthorn-city.component';

describe('BlackthornCityComponent', () => {
  let component: BlackthornCityComponent;
  let fixture: ComponentFixture<BlackthornCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlackthornCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackthornCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
