import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopImgComponent } from './coop-img.component';

describe('CoopImgComponent', () => {
  let component: CoopImgComponent;
  let fixture: ComponentFixture<CoopImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoopImgComponent]
    });
    fixture = TestBed.createComponent(CoopImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
