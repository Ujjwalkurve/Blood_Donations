import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReceiverComponent } from './login-receiver.component';

describe('LoginReceiverComponent', () => {
  let component: LoginReceiverComponent;
  let fixture: ComponentFixture<LoginReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginReceiverComponent]
    });
    fixture = TestBed.createComponent(LoginReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
