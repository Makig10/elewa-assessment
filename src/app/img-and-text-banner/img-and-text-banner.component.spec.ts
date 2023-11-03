import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAndTextBannerComponent } from './img-and-text-banner.component';

describe('ImgAndTextBannerComponent', () => {
  let component: ImgAndTextBannerComponent;
  let fixture: ComponentFixture<ImgAndTextBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgAndTextBannerComponent]
    });
    fixture = TestBed.createComponent(ImgAndTextBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
