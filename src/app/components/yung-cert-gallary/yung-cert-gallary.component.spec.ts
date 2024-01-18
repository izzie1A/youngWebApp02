import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YungCertGallaryComponent } from './yung-cert-gallary.component';

describe('YungCertGallaryComponent', () => {
  let component: YungCertGallaryComponent;
  let fixture: ComponentFixture<YungCertGallaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YungCertGallaryComponent]
    });
    fixture = TestBed.createComponent(YungCertGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
