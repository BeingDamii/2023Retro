import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExperiencesComponent } from './all-experiences.component';

describe('AllExperiencesComponent', () => {
  let component: AllExperiencesComponent;
  let fixture: ComponentFixture<AllExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllExperiencesComponent]
    });
    fixture = TestBed.createComponent(AllExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
