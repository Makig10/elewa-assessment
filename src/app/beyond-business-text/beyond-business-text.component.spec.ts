import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondBusinessTextComponent } from './beyond-business-text.component';

describe('BeyondBusinessTextComponent', () => {
  let component: BeyondBusinessTextComponent;
  let fixture: ComponentFixture<BeyondBusinessTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeyondBusinessTextComponent]
    });
    fixture = TestBed.createComponent(BeyondBusinessTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
