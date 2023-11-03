import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionTextComponent } from './call-to-action-text.component';

describe('CallToActionTextComponent', () => {
  let component: CallToActionTextComponent;
  let fixture: ComponentFixture<CallToActionTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallToActionTextComponent]
    });
    fixture = TestBed.createComponent(CallToActionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
