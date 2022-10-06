import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSidebarComponent } from './products-sidebar.component';

describe('ProductsSidebarComponent', () => {
  let component: ProductsSidebarComponent;
  let fixture: ComponentFixture<ProductsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
