import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcruTeakCityComponent } from './ecru-teak-city.component';

describe('EcruTeakCityComponent', () => {
  let component: EcruTeakCityComponent;
  let fixture: ComponentFixture<EcruTeakCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcruTeakCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcruTeakCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
