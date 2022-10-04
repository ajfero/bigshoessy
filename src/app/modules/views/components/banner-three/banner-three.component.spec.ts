import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerThreeComponent } from './banner-three.component';

describe('BannerThreeComponent', () => {
  let component: BannerThreeComponent;
  let fixture: ComponentFixture<BannerThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
