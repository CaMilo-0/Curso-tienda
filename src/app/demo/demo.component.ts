import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Tienda';

  power = 2;

  items=['tenis', 'Sandalias', 'Botas'];


  Additem() {
    this.items.push('nuevo item');
  }

  Deleteitem(index: number){
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
