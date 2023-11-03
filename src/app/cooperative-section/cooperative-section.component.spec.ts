import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeSectionComponent } from './cooperative-section.component';

describe('CooperativeSectionComponent', () => {
  let component: CooperativeSectionComponent;
  let fixture: ComponentFixture<CooperativeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CooperativeSectionComponent]
    });
    fixture = TestBed.createComponent(CooperativeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
