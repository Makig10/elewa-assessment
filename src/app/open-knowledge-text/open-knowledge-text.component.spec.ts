import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenKnowledgeTextComponent } from './open-knowledge-text.component';

describe('OpenKnowledgeTextComponent', () => {
  let component: OpenKnowledgeTextComponent;
  let fixture: ComponentFixture<OpenKnowledgeTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenKnowledgeTextComponent]
    });
    fixture = TestBed.createComponent(OpenKnowledgeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
