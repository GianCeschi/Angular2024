import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaProductsComponent } from './tienda-products/tienda-products.component';
import { TiendaAboutComponent } from './tienda-about/tienda-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products', 
    component: TiendaProductsComponent
  },
  {
    path: 'about', 
    component: TiendaAboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
