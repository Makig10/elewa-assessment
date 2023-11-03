import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCallToActionComponent } from './invest-call-to-action.component';

describe('InvestCallToActionComponent', () => {
  let component: InvestCallToActionComponent;
  let fixture: ComponentFixture<InvestCallToActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestCallToActionComponent]
    });
    fixture = TestBed.createComponent(InvestCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
