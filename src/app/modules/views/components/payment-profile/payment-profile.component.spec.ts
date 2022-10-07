import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProfileComponent } from './payment-profile.component';

describe('PaymentProfileComponent', () => {
  let component: PaymentProfileComponent;
  let fixture: ComponentFixture<PaymentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
