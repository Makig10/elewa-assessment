import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondBusinessImageComponent } from './beyond-business-image.component';

describe('BeyondBusinessImageComponent', () => {
  let component: BeyondBusinessImageComponent;
  let fixture: ComponentFixture<BeyondBusinessImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeyondBusinessImageComponent]
    });
    fixture = TestBed.createComponent(BeyondBusinessImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
