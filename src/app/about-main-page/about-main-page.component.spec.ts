import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMainPageComponent } from './about-main-page.component';

describe('AboutMainPageComponent', () => {
  let component: AboutMainPageComponent;
  let fixture: ComponentFixture<AboutMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMainPageComponent]
    });
    fixture = TestBed.createComponent(AboutMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
