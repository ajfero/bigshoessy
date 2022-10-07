import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsUploadDeleteComponent } from './buttons-upload-delete.component';

describe('ButtonsUploadDeleteComponent', () => {
  let component: ButtonsUploadDeleteComponent;
  let fixture: ComponentFixture<ButtonsUploadDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsUploadDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsUploadDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
