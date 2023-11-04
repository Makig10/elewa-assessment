import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamCarouselComponent } from './about-team-carousel.component';

describe('AboutTeamCarouselComponent', () => {
  let component: AboutTeamCarouselComponent;
  let fixture: ComponentFixture<AboutTeamCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTeamCarouselComponent]
    });
    fixture = TestBed.createComponent(AboutTeamCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
