import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCertificationsComponent } from './update-certifications.component';

describe('UpdateCertificationsComponent', () => {
  let component: UpdateCertificationsComponent;
  let fixture: ComponentFixture<UpdateCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
