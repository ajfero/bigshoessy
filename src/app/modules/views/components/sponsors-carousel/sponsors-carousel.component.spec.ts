import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsCarouselComponent } from './sponsors-carousel.component';

describe('SponsorsCarouselComponent', () => {
  let component: SponsorsCarouselComponent;
  let fixture: ComponentFixture<SponsorsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
