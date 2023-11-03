import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLinksComponent } from './head-links.component';

describe('HeadLinksComponent', () => {
  let component: HeadLinksComponent;
  let fixture: ComponentFixture<HeadLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadLinksComponent]
    });
    fixture = TestBed.createComponent(HeadLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
