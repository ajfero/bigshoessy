import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOpcionalComponent } from './contact-opcional.component';

describe('ContactOpcionalComponent', () => {
  let component: ContactOpcionalComponent;
  let fixture: ComponentFixture<ContactOpcionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactOpcionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOpcionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
