import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestMainPageComponent } from './invest-main-page.component';

describe('InvestMainPageComponent', () => {
  let component: InvestMainPageComponent;
  let fixture: ComponentFixture<InvestMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestMainPageComponent]
    });
    fixture = TestBed.createComponent(InvestMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
