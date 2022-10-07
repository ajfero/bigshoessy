import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSliderComponent } from './ng-slider.component';

describe('NgSliderComponent', () => {
  let component: NgSliderComponent;
  let fixture: ComponentFixture<NgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
