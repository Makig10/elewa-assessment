import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondBusinessComponent } from './beyond-business.component';

describe('BeyondBusinessComponent', () => {
  let component: BeyondBusinessComponent;
  let fixture: ComponentFixture<BeyondBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeyondBusinessComponent]
    });
    fixture = TestBed.createComponent(BeyondBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
