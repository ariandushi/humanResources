import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalFileComponent } from './add-personal-file.component';

describe('AddPersonalFileComponent', () => {
  let component: AddPersonalFileComponent;
  let fixture: ComponentFixture<AddPersonalFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonalFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
