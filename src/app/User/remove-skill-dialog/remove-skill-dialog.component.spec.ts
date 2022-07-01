import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSkillDialogComponent } from './remove-skill-dialog.component';

describe('RemoveSkillDialogComponent', () => {
  let component: RemoveSkillDialogComponent;
  let fixture: ComponentFixture<RemoveSkillDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveSkillDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSkillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
