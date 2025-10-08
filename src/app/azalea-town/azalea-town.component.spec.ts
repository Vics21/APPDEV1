import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzaleaTownComponent } from './azalea-town.component';

describe('AzaleaTownComponent', () => {
  let component: AzaleaTownComponent;
  let fixture: ComponentFixture<AzaleaTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzaleaTownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzaleaTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
