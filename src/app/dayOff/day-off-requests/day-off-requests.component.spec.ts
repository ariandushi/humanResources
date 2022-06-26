import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOffRequestsComponent } from './day-off-requests.component';

describe('DayOffRequestsComponent', () => {
  let component: DayOffRequestsComponent;
  let fixture: ComponentFixture<DayOffRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayOffRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOffRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
