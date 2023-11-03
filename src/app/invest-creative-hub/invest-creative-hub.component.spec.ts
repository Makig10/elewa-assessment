import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCreativeHubComponent } from './invest-creative-hub.component';

describe('InvestCreativeHubComponent', () => {
  let component: InvestCreativeHubComponent;
  let fixture: ComponentFixture<InvestCreativeHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestCreativeHubComponent]
    });
    fixture = TestBed.createComponent(InvestCreativeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
