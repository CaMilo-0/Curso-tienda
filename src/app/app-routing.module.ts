import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { from } from 'rxjs';
import { AdminGuard } from './admin.guard';
const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./Products/products.module').then(p => p.ProductsModule)
      },
      {
        path: 'products/:id',
        loadChildren: () => import('./Products/products.module').then(pd => pd.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(c => c.ContactModule)
      },
    ]
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
    },
    {
      path: '**',
      loadChildren: () => import('./pagina-incorrecta/pagina-incorrecta.module').then(pi => pi.PaginaIncorrectaModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
