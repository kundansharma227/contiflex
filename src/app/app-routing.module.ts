import { ContactComponent } from './webpage/contact/contact.component';
import { WebpageComponent } from './webpage/webpage.component';
import { AboutusComponent} from './webpage/aboutus/aboutus.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './webpage/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './webpage/products/products.component';

const routes: Routes = [
  {path: '', component:WebpageComponent,
  
  children: [
    {
      path: 'home', // child route path
      component: HomeComponent, // child route component that the router renders
    },
    {
      path: 'aboutus', // child route path
      component: AboutusComponent, // child route component that the router renders
    },
    {
      path: 'contact', // child route path
      component: ContactComponent, // child route component that the router renders
    },

    {
      path: 'products', // child route path
      component: ProductsComponent, // child route component that the router renders
    },
]},

{path: 'webpage', component:WebpageComponent},
  {path: 'dashboard', component:DashboardComponent},
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
