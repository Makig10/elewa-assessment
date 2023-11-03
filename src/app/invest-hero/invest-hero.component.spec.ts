import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestHeroComponent } from './invest-hero.component';

describe('InvestHeroComponent', () => {
  let component: InvestHeroComponent;
  let fixture: ComponentFixture<InvestHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestHeroComponent]
    });
    fixture = TestBed.createComponent(InvestHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
