import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUserListComponent } from './skill-user-list.component';

describe('SkillUserListComponent', () => {
  let component: SkillUserListComponent;
  let fixture: ComponentFixture<SkillUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
