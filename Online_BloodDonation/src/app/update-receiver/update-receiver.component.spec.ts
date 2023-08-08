import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReceiverComponent } from './update-receiver.component';

describe('UpdateReceiverComponent', () => {
  let component: UpdateReceiverComponent;
  let fixture: ComponentFixture<UpdateReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateReceiverComponent]
    });
    fixture = TestBed.createComponent(UpdateReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
