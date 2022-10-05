import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselSponsorsComponent } from './carrousel-sponsors.component';

describe('CarrouselSponsorsComponent', () => {
  let component: CarrouselSponsorsComponent;
  let fixture: ComponentFixture<CarrouselSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselSponsorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
