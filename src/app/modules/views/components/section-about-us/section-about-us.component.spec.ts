import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutUsComponent } from './section-about-us.component';

describe('SectionAboutUsComponent', () => {
  let component: SectionAboutUsComponent;
  let fixture: ComponentFixture<SectionAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
