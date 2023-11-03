import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterImagesComponent } from './footer-images.component';

describe('FooterImagesComponent', () => {
  let component: FooterImagesComponent;
  let fixture: ComponentFixture<FooterImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterImagesComponent]
    });
    fixture = TestBed.createComponent(FooterImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
