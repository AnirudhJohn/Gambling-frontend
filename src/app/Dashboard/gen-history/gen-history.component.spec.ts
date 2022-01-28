import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenHistoryComponent } from './gen-history.component';

describe('GenHistoryComponent', () => {
  let component: GenHistoryComponent;
  let fixture: ComponentFixture<GenHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
