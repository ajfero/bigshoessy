import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOneComponent } from './banner-one.component';

describe('BannerOneComponent', () => {
  let component: BannerOneComponent;
  let fixture: ComponentFixture<BannerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
