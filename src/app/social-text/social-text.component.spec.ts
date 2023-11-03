import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTextComponent } from './social-text.component';

describe('SocialTextComponent', () => {
  let component: SocialTextComponent;
  let fixture: ComponentFixture<SocialTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialTextComponent]
    });
    fixture = TestBed.createComponent(SocialTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
