import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeroContentComponent } from './about-hero-content.component';

describe('AboutHeroContentComponent', () => {
  let component: AboutHeroContentComponent;
  let fixture: ComponentFixture<AboutHeroContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutHeroContentComponent]
    });
    fixture = TestBed.createComponent(AboutHeroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
