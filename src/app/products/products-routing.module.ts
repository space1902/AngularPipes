import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path: 'int',
    component: BasicPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent
  },
  {
    path: 'pers',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: 'int'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
