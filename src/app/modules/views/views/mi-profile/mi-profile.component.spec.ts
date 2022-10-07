import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiProfileComponent } from './mi-profile.component';

describe('MiProfileComponent', () => {
  let component: MiProfileComponent;
  let fixture: ComponentFixture<MiProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
