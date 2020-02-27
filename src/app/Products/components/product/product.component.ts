import { Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Producto } from 'src/app/product.model';
import { from } from 'rxjs';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy{
    @Input() zapatos: Producto;
    @Output() productclicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('1. constructor');
    }
    // ngOnChanges(changes: SimpleChanges){
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }
    ngOnInit() {
        console.log('3. ngOnInit');
    }
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }
    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }
  Addcar() {
    console.log(' Añadir al Carrito ');
    this.productclicked.emit(this.zapatos.id);
}
    }

