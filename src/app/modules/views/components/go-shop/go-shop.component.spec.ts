import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoShopComponent } from './go-shop.component';

describe('GoShopComponent', () => {
  let component: GoShopComponent;
  let fixture: ComponentFixture<GoShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
