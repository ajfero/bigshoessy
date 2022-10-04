import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselProductosComponent } from './carrousel-productos.component';

describe('CarrouselProductosComponent', () => {
  let component: CarrouselProductosComponent;
  let fixture: ComponentFixture<CarrouselProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
