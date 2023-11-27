import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightOfExperienComponent } from './highlight-of-experien.component';

describe('HighlightOfExperienComponent', () => {
  let component: HighlightOfExperienComponent;
  let fixture: ComponentFixture<HighlightOfExperienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightOfExperienComponent]
    });
    fixture = TestBed.createComponent(HighlightOfExperienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
