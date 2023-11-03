import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestKeyFigureCardComponent } from './invest-key-figure-card.component';

describe('InvestKeyFigureCardComponent', () => {
  let component: InvestKeyFigureCardComponent;
  let fixture: ComponentFixture<InvestKeyFigureCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestKeyFigureCardComponent]
    });
    fixture = TestBed.createComponent(InvestKeyFigureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
