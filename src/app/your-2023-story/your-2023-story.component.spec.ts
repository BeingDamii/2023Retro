import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Your2023StoryComponent } from './your-2023-story.component';

describe('Your2023StoryComponent', () => {
  let component: Your2023StoryComponent;
  let fixture: ComponentFixture<Your2023StoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Your2023StoryComponent]
    });
    fixture = TestBed.createComponent(Your2023StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
