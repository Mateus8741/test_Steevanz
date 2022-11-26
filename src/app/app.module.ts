import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Checkout1Component } from './pages/checkout1/checkout1.component';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { CheckoutBarComponent } from './components/checkout-bar/checkout-bar.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { Checkout2Component } from './pages/checkout2/checkout2.component';
import { TotalComponent } from './components/total/total.component';
import { StepsComponent } from './components/steps/steps.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Checkout3Component } from './pages/checkout3/checkout3.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HttpClientModule } from "@angular/common/http";
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { FinalCheckouComponent } from './pages/final-checkou/final-checkou.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Checkout1Component,
    ButtonComponent,
    FormComponent,
    CheckoutBarComponent,
    AnnouncementComponent,
    Checkout2Component,
    TotalComponent,
    StepsComponent,
    DataFormComponent,
    Checkout3Component,
    DropdownComponent,
    TextAreaComponent,
    CheckBoxComponent,
    FinalCheckouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
