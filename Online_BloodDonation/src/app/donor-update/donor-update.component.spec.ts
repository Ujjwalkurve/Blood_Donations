import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorUpdateComponent } from './donor-update.component';

describe('DonorUpdateComponent', () => {
  let component: DonorUpdateComponent;
  let fixture: ComponentFixture<DonorUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorUpdateComponent]
    });
    fixture = TestBed.createComponent(DonorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
