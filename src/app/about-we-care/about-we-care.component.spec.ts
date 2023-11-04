import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWeCareComponent } from './about-we-care.component';

describe('AboutWeCareComponent', () => {
  let component: AboutWeCareComponent;
  let fixture: ComponentFixture<AboutWeCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutWeCareComponent]
    });
    fixture = TestBed.createComponent(AboutWeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
