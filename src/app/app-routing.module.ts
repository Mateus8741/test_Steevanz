import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Checkout1Component } from './pages/checkout1/checkout1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout1', component: Checkout1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
