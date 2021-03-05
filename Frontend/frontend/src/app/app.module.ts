import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxPaginationModule } from 'ngx-pagination'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebcamModule } from 'ngx-webcam';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MaincarouselComponent } from './components/maincarousel/maincarousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { IntemscarouselComponent } from './components/intemscarousel/intemscarousel.component';
import { NoticeComponent } from './components/notice/notice.component';
import { ExpansionpanelComponent } from './components/expansionpanel/expansionpanel.component';
import { FooterComponent } from './components/footer/footer.component';
import { TypegalleryComponent } from './components/typegallery/typegallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { HomeComponent } from './components/home/home.component';
import { SearchproductComponent } from './components/searchproduct/searchproduct.component';
import { ImagecardComponent } from './components/typegallery/imagecard/imagecard.component';
import { ImagesadvComponent } from './components/imagesadv/imagesadv.component';
import { CategoryWiseDetailsComponent } from './components/category-wise-details/category-wise-details.component';
import { ExplorenavbarComponent } from './components/explorenavbar/explorenavbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { PricerangeComponent } from './components/pricerange/pricerange.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { FilterWarrantyComponent } from './components/filter-warranty/filter-warranty.component';
import { PagenavigationComponent } from './components/pagenavigation/pagenavigation.component';
import { DropdownbarComponent } from './components/dropdownbar/dropdownbar.component'

import { ProductAdvanceSearchService } from './product-advance-search.service';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincarouselComponent,
    IntemscarouselComponent,
    NoticeComponent,
    ExpansionpanelComponent,
    FooterComponent,
    TypegalleryComponent,
    ProdDetailsComponent,
    HomeComponent,
    SearchproductComponent,
    ImagecardComponent,
    ImagesadvComponent,
    CategoryWiseDetailsComponent,
    ExplorenavbarComponent,
    FiltersComponent,
    RatingsComponent,
    PricerangeComponent,
    PaginationComponent,
    ProductcardComponent,
    FilterWarrantyComponent,
    PagenavigationComponent,
    DropdownbarComponent,
    CartComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    IvyCarouselModule,
    HttpClientModule,
    Ng5SliderModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,
    WebcamModule,
  ],
  providers: [ProductAdvanceSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
