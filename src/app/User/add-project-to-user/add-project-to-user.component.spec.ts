import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectToUserComponent } from './add-project-to-user.component';

describe('AddProjectToUserComponent', () => {
  let component: AddProjectToUserComponent;
  let fixture: ComponentFixture<AddProjectToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectToUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
