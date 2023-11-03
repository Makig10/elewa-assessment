import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestKeyFiguresComponent } from './invest-key-figures.component';

describe('InvestKeyFiguresComponent', () => {
  let component: InvestKeyFiguresComponent;
  let fixture: ComponentFixture<InvestKeyFiguresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestKeyFiguresComponent]
    });
    fixture = TestBed.createComponent(InvestKeyFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
