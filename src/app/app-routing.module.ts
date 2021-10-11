import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [

  { path: 'home-component', component: HomeComponent },

  { path: 'about-component', component: AboutComponent },

  { path: 'product-component', component: ProductComponent },

  { path: 'contact-component', component: ContactComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
