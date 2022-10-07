import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswdComponent } from './change-passwd.component';

describe('ChangePasswdComponent', () => {
  let component: ChangePasswdComponent;
  let fixture: ComponentFixture<ChangePasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
