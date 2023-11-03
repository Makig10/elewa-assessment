import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestHeroContentComponent } from './invest-hero-content.component';

describe('InvestHeroContentComponent', () => {
  let component: InvestHeroContentComponent;
  let fixture: ComponentFixture<InvestHeroContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestHeroContentComponent]
    });
    fixture = TestBed.createComponent(InvestHeroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
