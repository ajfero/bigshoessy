import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProductsComponent } from './sidebar-products.component';

describe('SidebarProductsComponent', () => {
  let component: SidebarProductsComponent;
  let fixture: ComponentFixture<SidebarProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
