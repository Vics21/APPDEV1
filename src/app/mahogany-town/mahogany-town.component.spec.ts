import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahoganyTownComponent } from './mahogany-town.component';

describe('MahoganyTownComponent', () => {
  let component: MahoganyTownComponent;
  let fixture: ComponentFixture<MahoganyTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MahoganyTownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahoganyTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
