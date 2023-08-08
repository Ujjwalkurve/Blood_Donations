import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDonorComponent } from './find-donor.component';

describe('FindDonorComponent', () => {
  let component: FindDonorComponent;
  let fixture: ComponentFixture<FindDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindDonorComponent]
    });
    fixture = TestBed.createComponent(FindDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
