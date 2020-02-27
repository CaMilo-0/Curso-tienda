import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaIncorrectaComponent } from './components/pagina-incorrecta.component';

const routes: Routes = [
    {
        path: '',
        component: PaginaIncorrectaComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PaginaIncorrectaRoutingModule{}