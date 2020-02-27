import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaIncorrectaComponent } from './components/pagina-incorrecta.component';
import { PaginaIncorrectaRoutingModule } from './pagina-incorrecta-routing.module';
import { SharedModule } from '../shared/shared.module';
import { from } from 'rxjs';

@NgModule({
    declarations: [
        PaginaIncorrectaComponent
    ],
    imports: [
        CommonModule,
        PaginaIncorrectaRoutingModule,
        SharedModule
    ]
})
export class PaginaIncorrectaModule{
}