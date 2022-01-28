import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseracingComponent } from './horseracing.component';

describe('HorseracingComponent', () => {
  let component: HorseracingComponent;
  let fixture: ComponentFixture<HorseracingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseracingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
