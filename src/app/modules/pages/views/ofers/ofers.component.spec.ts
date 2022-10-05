import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfersComponent } from './ofers.component';

describe('OfersComponent', () => {
  let component: OfersComponent;
  let fixture: ComponentFixture<OfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
