import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component'
import { HomeComponent } from './components/home/home.component'
import { SearchproductComponent } from './components/searchproduct/searchproduct.component'
import { CategoryWiseDetailsComponent } from './components/category-wise-details/category-wise-details.component'

const routes: Routes = [

  {
    component: ProdDetailsComponent,
    path: 'prod-details/:id'
  },
  {
    component: CategoryWiseDetailsComponent,
    path: 'Category/:tags'
  },
  {
    component: SearchproductComponent,
    path: 'search'
  },
  {
    component: HomeComponent,
    path: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
