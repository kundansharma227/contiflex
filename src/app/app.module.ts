import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebpageComponent } from './webpage/webpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './webpage/home/home.component';
import { AboutusComponent } from './webpage/aboutus/aboutus.component';
import { ContactComponent } from './webpage/contact/contact.component';
import { ProductsComponent } from './webpage/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent,
    DashboardComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
