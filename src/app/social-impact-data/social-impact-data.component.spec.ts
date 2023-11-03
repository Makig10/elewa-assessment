import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactDataComponent } from './social-impact-data.component';

describe('SocialImpactDataComponent', () => {
  let component: SocialImpactDataComponent;
  let fixture: ComponentFixture<SocialImpactDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialImpactDataComponent]
    });
    fixture = TestBed.createComponent(SocialImpactDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
