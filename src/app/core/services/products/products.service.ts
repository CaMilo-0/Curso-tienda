import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/product.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllproducts() {
    return this.http.get<Producto[]>('https://platzi-store.herokuapp.com/products/');
  }

  getProduct(id: string) {
    return this.http.get<Producto>(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
