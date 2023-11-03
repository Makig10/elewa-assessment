import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenKnowledgeImageComponent } from './open-knowledge-image.component';

describe('OpenKnowledgeImageComponent', () => {
  let component: OpenKnowledgeImageComponent;
  let fixture: ComponentFixture<OpenKnowledgeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenKnowledgeImageComponent]
    });
    fixture = TestBed.createComponent(OpenKnowledgeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
