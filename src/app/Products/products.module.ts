import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleProductsComponent } from '././components/detalle-products/detalle-products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { from } from 'rxjs';

@NgModule({
    declarations: [
       ProductsComponent,
       DetalleProductsComponent,
       ProductComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class ProductsModule { }