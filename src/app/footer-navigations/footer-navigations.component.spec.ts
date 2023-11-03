import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigationsComponent } from './footer-navigations.component';

describe('FooterNavigationsComponent', () => {
  let component: FooterNavigationsComponent;
  let fixture: ComponentFixture<FooterNavigationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterNavigationsComponent]
    });
    fixture = TestBed.createComponent(FooterNavigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
