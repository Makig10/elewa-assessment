import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopTextComponent } from './coop-text.component';

describe('CoopTextComponent', () => {
  let component: CoopTextComponent;
  let fixture: ComponentFixture<CoopTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoopTextComponent]
    });
    fixture = TestBed.createComponent(CoopTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
