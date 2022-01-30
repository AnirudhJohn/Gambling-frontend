import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketDetailComponent } from './cricket-detail.component';

describe('CricketDetailComponent', () => {
  let component: CricketDetailComponent;
  let fixture: ComponentFixture<CricketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
