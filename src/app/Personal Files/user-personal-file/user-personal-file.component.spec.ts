import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalFileComponent } from './user-personal-file.component';

describe('UserPersonalFileComponent', () => {
  let component: UserPersonalFileComponent;
  let fixture: ComponentFixture<UserPersonalFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPersonalFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
