import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionTextComponent } from './projects-section-text.component';

describe('ProjectsSectionTextComponent', () => {
  let component: ProjectsSectionTextComponent;
  let fixture: ComponentFixture<ProjectsSectionTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsSectionTextComponent]
    });
    fixture = TestBed.createComponent(ProjectsSectionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
