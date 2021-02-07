import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-maincarousel',
  templateUrl: './maincarousel.component.html',
  styleUrls: ['./maincarousel.component.css']
})
export class MaincarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carouselData = [
    {
      id: 1,
      src: 'https://www.micol.life/assets/img/products/slider/slider11.jpg',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: 2,
      src: 'https://www.micol.life/assets/img/products/slider/slider16.png',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: 3,
      src: 'https://www.micol.life/assets/img/products/slider/slider-cleansalon.jpg',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: 4,
      src: 'https://www.micol.life/assets/img/products/slider/slider_sprinage.png',
      alt: 'Side 4',
      title: 'Side 4'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplayTimeout: 10000,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  activeSlides: SlidesOutputData;

  getPassedData(data: any) {
    this.activeSlides = data;
  }

  getChangeData(data: any) {
    this.activeSlides = data;
  }

  getChangedData(data: any) {
    this.activeSlides = data;
  }
  removeLastSlide() {
    this.carouselData.splice(-1, 1);
  }

  carouselChanged(evt: SlidesOutputData) {
  }


  imageObject = [{
    image: 'https://cdn.shopify.com/s/files/1/0014/2648/9388/files/2000x500_desktop-slider_slime_1512x.jpg?v=1610666551',
    thumbImage: 'https://cdn.shopify.com/s/files/1/0014/2648/9388/files/2000x500_desktop-slider_slime_1512x.jpg?v=1610666551',
    title: 'Hummingbirds are amazing creatures'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Example with title.'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
  }];

}
