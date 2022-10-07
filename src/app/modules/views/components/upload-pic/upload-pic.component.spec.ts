import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPicComponent } from './upload-pic.component';

describe('UploadPicComponent', () => {
  let component: UploadPicComponent;
  let fixture: ComponentFixture<UploadPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
