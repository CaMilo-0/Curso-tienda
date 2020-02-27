import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Producto } from 'src/app/product.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-detalle-products',
  templateUrl: './detalle-products.component.html',
  styleUrls: ['./detalle-products.component.scss']
})
export class DetalleProductsComponent implements OnInit {

  product: Producto;
  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) =>  {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
    });
}
}
