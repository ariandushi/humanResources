import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDayOffRequestComponent } from './place-day-off-request.component';

describe('PlaceDayOffRequestComponent', () => {
  let component: PlaceDayOffRequestComponent;
  let fixture: ComponentFixture<PlaceDayOffRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceDayOffRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDayOffRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
