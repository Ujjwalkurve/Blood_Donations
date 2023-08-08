import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDonorComponent } from './register-donor.component';

describe('RegisterDonorComponent', () => {
  let component: RegisterDonorComponent;
  let fixture: ComponentFixture<RegisterDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDonorComponent]
    });
    fixture = TestBed.createComponent(RegisterDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
