import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenKnowledgeComponent } from './open-knowledge.component';

describe('OpenKnowledgeComponent', () => {
  let component: OpenKnowledgeComponent;
  let fixture: ComponentFixture<OpenKnowledgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenKnowledgeComponent]
    });
    fixture = TestBed.createComponent(OpenKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
