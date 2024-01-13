import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectDetailComponent } from './our-project-detail.component';

describe('OurProjectDetailComponent', () => {
  let component: OurProjectDetailComponent;
  let fixture: ComponentFixture<OurProjectDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurProjectDetailComponent]
    });
    fixture = TestBed.createComponent(OurProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
