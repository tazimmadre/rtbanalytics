import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdunitsComponent } from './adunits.component';

describe('AdunitsComponent', () => {
  let component: AdunitsComponent;
  let fixture: ComponentFixture<AdunitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdunitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
