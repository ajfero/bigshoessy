import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecoverComponent } from './modal-recover.component';

describe('ModalRecoverComponent', () => {
  let component: ModalRecoverComponent;
  let fixture: ComponentFixture<ModalRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRecoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
