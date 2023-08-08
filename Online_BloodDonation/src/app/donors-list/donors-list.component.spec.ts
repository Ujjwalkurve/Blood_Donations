import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsListComponent } from './donors-list.component';

describe('DonorsListComponent', () => {
  let component: DonorsListComponent;
  let fixture: ComponentFixture<DonorsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorsListComponent]
    });
    fixture = TestBed.createComponent(DonorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
