import { Component, OnInit} from '@angular/core';
import { Producto } from 'src/app/product.model';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
   productos: Producto[] = [
    {
      id: '1',
      image: 'assets/images/botas.jpeg',
      title: 'botas',
      precio: 80000
    },
    {
      id: '2',
      image: 'assets/images/sandalias.jpeg',
      title: 'Sandalias',
      precio: 50000
    },
    {
      id: '3',
      image: 'assets/images/tenis.jpeg',
      title: 'Tenis',
      precio: 70000
    },
    {
      id: '4',
      image: 'assets/images/zapato.jpg',
      title: 'Zapato',
      precio: 76000
    }
  ];
  constructor() { }
  ngOnInit(): void {
  }
  clicproduct(id: number) {
    console.log('zapatos');
    console.log(id);
  }
}
