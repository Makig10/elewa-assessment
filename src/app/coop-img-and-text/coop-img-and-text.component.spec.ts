import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopImgAndTextComponent } from './coop-img-and-text.component';

describe('CoopImgAndTextComponent', () => {
  let component: CoopImgAndTextComponent;
  let fixture: ComponentFixture<CoopImgAndTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoopImgAndTextComponent]
    });
    fixture = TestBed.createComponent(CoopImgAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
