import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProductsComponent } from '././components/detalle-products/detalle-products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { from } from 'rxjs';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: ':id',
        component: DetalleProductsComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {}