import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchComponent } from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';
import { AppComponent } from './components/application/app.component';


// import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : '',      redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',      component: HomeComponent},
  { path: 'product-detail/:prodTitle', component: ProductDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
