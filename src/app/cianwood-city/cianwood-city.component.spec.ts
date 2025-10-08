import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CianwoodCityComponent } from './cianwood-city.component';

describe('CianwoodCityComponent', () => {
  let component: CianwoodCityComponent;
  let fixture: ComponentFixture<CianwoodCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CianwoodCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CianwoodCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
