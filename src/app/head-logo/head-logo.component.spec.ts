import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLogoComponent } from './head-logo.component';

describe('HeadLogoComponent', () => {
  let component: HeadLogoComponent;
  let fixture: ComponentFixture<HeadLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadLogoComponent]
    });
    fixture = TestBed.createComponent(HeadLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
