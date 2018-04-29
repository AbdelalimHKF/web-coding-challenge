import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyShopComponent } from './nearby-shop.component';

describe('NearbyShopComponent', () => {
  let component: NearbyShopComponent;
  let fixture: ComponentFixture<NearbyShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
