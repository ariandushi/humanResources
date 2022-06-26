import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRoleDialogComponent } from './remove-role-dialog.component';

describe('RemoveRoleDialogComponent', () => {
  let component: RemoveRoleDialogComponent;
  let fixture: ComponentFixture<RemoveRoleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRoleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
