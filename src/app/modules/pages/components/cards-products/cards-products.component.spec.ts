import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProductsComponent } from './cards-products.component';

describe('CardsProductsComponent', () => {
  let component: CardsProductsComponent;
  let fixture: ComponentFixture<CardsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
