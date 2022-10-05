import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselProductsComponent } from './carrousel-products.component';

describe('CarrouselProductsComponent', () => {
  let component: CarrouselProductsComponent;
  let fixture: ComponentFixture<CarrouselProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
