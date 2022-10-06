import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTwoComponent } from './banner-two.component';

describe('BannerTwoComponent', () => {
  let component: BannerTwoComponent;
  let fixture: ComponentFixture<BannerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
