import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonalFileComponent } from './update-personal-file.component';

describe('UpdatePersonalFileComponent', () => {
  let component: UpdatePersonalFileComponent;
  let fixture: ComponentFixture<UpdatePersonalFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePersonalFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
