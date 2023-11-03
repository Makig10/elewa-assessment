import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestDetailSectionComponent } from './invest-detail-section.component';

describe('InvestDetailSectionComponent', () => {
  let component: InvestDetailSectionComponent;
  let fixture: ComponentFixture<InvestDetailSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestDetailSectionComponent]
    });
    fixture = TestBed.createComponent(InvestDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
