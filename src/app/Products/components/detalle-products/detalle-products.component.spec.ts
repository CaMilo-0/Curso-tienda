import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductsComponent } from './detalle-products.component';

describe('DetalleProductsComponent', () => {
  let component: DetalleProductsComponent;
  let fixture: ComponentFixture<DetalleProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
