import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroImageComponent } from './home-hero-image.component';

describe('HomeHeroImageComponent', () => {
  let component: HomeHeroImageComponent;
  let fixture: ComponentFixture<HomeHeroImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeroImageComponent]
    });
    fixture = TestBed.createComponent(HomeHeroImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
