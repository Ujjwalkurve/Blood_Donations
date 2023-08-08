import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReceiverComponent } from './register-receiver.component';

describe('RegisterReceiverComponent', () => {
  let component: RegisterReceiverComponent;
  let fixture: ComponentFixture<RegisterReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterReceiverComponent]
    });
    fixture = TestBed.createComponent(RegisterReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
