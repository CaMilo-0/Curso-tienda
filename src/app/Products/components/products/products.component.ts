import { Component, OnInit} from '@angular/core';
import { Producto } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
   productos: Producto[];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllproducts()
    .subscribe( data => {
this.productos = data;
    });
  }
  clicproduct(id: number) {
    console.log('zapatos');
    console.log(id);
  }


}
