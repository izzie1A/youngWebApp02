import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectCategoriesComponent } from './our-project-categories.component';

describe('OurProjectCategoriesComponent', () => {
  let component: OurProjectCategoriesComponent;
  let fixture: ComponentFixture<OurProjectCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurProjectCategoriesComponent]
    });
    fixture = TestBed.createComponent(OurProjectCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
