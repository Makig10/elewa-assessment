import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionImagesComponent } from './projects-section-images.component';

describe('ProjectsSectionImagesComponent', () => {
  let component: ProjectsSectionImagesComponent;
  let fixture: ComponentFixture<ProjectsSectionImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsSectionImagesComponent]
    });
    fixture = TestBed.createComponent(ProjectsSectionImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
