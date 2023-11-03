import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderSectionComponent } from './stakeholder-section.component';

describe('StakeholderSectionComponent', () => {
  let component: StakeholderSectionComponent;
  let fixture: ComponentFixture<StakeholderSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderSectionComponent]
    });
    fixture = TestBed.createComponent(StakeholderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
