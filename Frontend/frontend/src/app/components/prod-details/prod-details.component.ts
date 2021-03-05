import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { ProductService } from '../expansionpanel/../../product.service'

//test

import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private produc: ProductService, private route: Router) { }

  collection: any = []
  images = []

  //test
  visualSimilar: any = []

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.SuggestByUserFunc();

    // override the route reuse strategy

    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.route.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.route.navigated = false;
        // if need to scroll back to top, here is the right place
        // window.scrollTo(0, 0);
      }
    });

    //End override the route reuse strategy

    //console.log(this.router.snapshot.params.id)

    this.produc.getCurrentProd(this.router.snapshot.params.id).subscribe((result: any) => {
      // console.warn(result)
      this.collection = result
      //console.log(this.collection.imageLink)
      //images of product from database & dummy static
      this.images = [
        { src: this.collection.imageLink },
        { src: "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=740&q=80" },
        { src: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80" },
        { src: "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" },

      ]

    })
  }
  active = 0

  //demo data for RECOMMENDATIONS section

  products = [
    { src: "https://uploads-ssl.webflow.com/5d552994548be47b97db38c2/5dd334dab513208089349904_Linne%203.png" },
    { src: "https://seacare.com/wp-content/uploads/2017/03/17-5-400x400.png" },
    { src: "https://cdn.shopify.com/s/files/1/0270/7983/5732/products/Antiagingfirstcareepicosm.png?v=1600023540" },
    { src: "https://media.allure.com/photos/5ed5737170ff090008b796b1/1:1/w_1280,h_1280,c_limit/Cake%20Beauty%20The%20Curl%20Friend%20Defining%20Curl%20Cream.png" },
    { src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F09%2F03%2FBitten_Lip_Tint_104650_v1_SPL_940x940_c10352e1-f9c4-49e4-8a02-a05d40e4f434.png" },
  ]



  visualSimilarList: any = [];

  //generate visualSimilar image
  similarImage() {

    this.produc.getList().subscribe((res) => {
      this.visualSimilar = res;

      this.produc.getvisualSimilarProd(this.collection.imageLink.split('/')[2]).subscribe((result: any) => {

        for (var key of result) {
          this.visualSimilar.forEach((element, index) => {
            if (element.imageLink.split('/')[2] == key) {
              this.visualSimilarList.push(element)
            }
          });
        }
      })
    })


  }


  //toggle
  star(value) {
    return parseInt(value)
  }
  blank(value) {
    return 5 - parseInt(value)
  }

  portal = false
  tooglePortal() {
    this.portal = !this.portal
    this.similarImage()
  }


  //test

  SuggestByUsers: any = [];
  SuggestUsersCollection: any = [];

  //generate visualSimilar image
  SuggestByUserFunc() {

    this.produc.getList().subscribe((res) => {
      this.SuggestByUsers = res;

      this.produc.getSuggestByUsers('2').subscribe((result: any) => {

        for (var key of result) {

          console.log(key)
          this.SuggestByUsers.forEach((element, index) => {
            if (element.id == key) {
              this.SuggestUsersCollection.push(element)
            }

            console.log(this.SuggestUsersCollection)

          });
        }
      })
    })


  }

  // ADDED
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplayTimeout: 10000,
    autoplay: true,
    items: 5,
    nav: false
  }

  // ADDED
  activeSlides: SlidesOutputData;

  // ADDED
  getPassedData(data: any) {
    this.activeSlides = data;
  }

  // ADDED
  getChangeData(data: any) {
    this.activeSlides = data;
  }

  // ADDED
  getChangedData(data: any) {
    this.activeSlides = data;
  }

  // ADDED
  removeLastSlide() {
    this.products.splice(-1, 1);
  }

  // ADDED
  carouselChanged(evt: SlidesOutputData) {
  }




}
