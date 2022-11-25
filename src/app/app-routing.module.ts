import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Checkout1Component } from './pages/checkout1/checkout1.component';
import { Checkout2Component } from './pages/checkout2/checkout2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout1', component: Checkout1Component },
  { path: 'checkout2', component: Checkout2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
