import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Producto } from 'src/app/product.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllproducts(){
    return this.productos;
  }

  getProduct(id: string){
    return this.productos.find(item => id === item.id);
    //"hola"
  }
}
