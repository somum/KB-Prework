import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { Options } from 'ng5-slider';


//Category search
import { Subject } from 'rxjs/Subject';
import { ProductService } from '../expansionpanel/../../product.service'

//test
import { Router } from '@angular/router';



@Component({
  selector: 'app-category-wise-details',
  templateUrl: './category-wise-details.component.html',
  styleUrls: ['./category-wise-details.component.css']
})
export class CategoryWiseDetailsComponent implements OnInit {

  isChecked: any;
  isCheckedVal: any;
  minval: number = 0;
  maxval: number = 999999;
  color: string;
  colorArray: any = [];
  warranty: string;
  warrantyArray: any = [];
  collection: any = []
  categoryTerm$: any;
  categoryResults: any = []
  p: number = 1;
  tagcollection: any = []
  tagsArray: any = [];


  constructor(private router: ActivatedRoute, private searchService: ProductService, private produc: ProductService, private route: Router) { }

  ngOnInit(): void {

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


    //console.log(this.router.snapshot.queryParamMap.get('title'))
    this.produc.getCurrentCategoryProd(this.router.snapshot.params.tags).subscribe((result) => {
      this.categoryResults = result
      //get all color
      this.colorArray = this.categoryResults.map(u => u.color)

      //unique warranty  
      this.colorArray = this.colorArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      })
      //order warranty
      this.colorArray.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)


      //get all warranty
      this.warrantyArray = this.categoryResults.map(u => u.warrantyPeriod)

      //unique warranty  
      this.warrantyArray = this.warrantyArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      })
      //order warranty
      this.warrantyArray.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)

    })

    //generate tags for category
    this.produc.getList().subscribe((res) => {
      this.tagcollection = res
      //get all tags
      this.tagsArray = this.tagcollection.map(u => u.tags)
      //unique tags  
      this.tagsArray = this.tagsArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      })
    })



  }


  categoryFilter() {
    //product category select
    this.searchService.categorySearch(this.categoryTerm$)
      .subscribe(results => {
        this.categoryResults = results;
        console.log(this.categoryResults)
      });

  }


  //sorting

  sortBy = [
    { name: "Recommended", value: 0 },
    { name: "Product list A-Z", value: 1 },
    { name: "Product list Z-A", value: 2 },
    { name: "Lower to Higher Price", value: 3 },
    { name: "Higher to Lower Price", value: 4 },
  ]

  sortByValue = 0

  setSortByValue(val: number) {
    this.sortByValue = val
    console.log(this.sortByValue)

    switch (this.sortByValue) {
      case 3: {
        this.categoryResults = this.categoryResults.sort(
          (low, high) => low.price - high.price
        );
        break;
      }

      case 4: {
        this.categoryResults = this.categoryResults.sort(
          (low, high) => high.price - low.price
        );
        break;
      }

      case 2: {
        this.categoryResults = this.categoryResults.sort(
          (low, high) => high.title.toLowerCase().trim() > low.title.trim().toLowerCase() ? 1 : -1
        );
        break;
      }

      case 1: {
        this.categoryResults = this.categoryResults.sort(
          (low, high) => high.title.toLowerCase().trim() < low.title.trim().toLowerCase() ? 1 : -1
        );
        break;
      }

      default: {
        this.categoryResults = this.categoryResults.sort(
          (low, high) => low.price - high.price
        );
        break;
      }
    }
    return this.categoryResults;
  }

  showSortBy = false;

  toogleShowSortBy() {
    this.showSortBy = !this.showSortBy;
  }

  shutShowSortBy() {
    this.showSortBy = false
  }



  //price range

  onChangePrice(id: string, event: any) {
    if (event != '' && id == 'minval') {
      this.minval = event;
      this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval);
      this.categoryFilter()
    }
    else if (event != '' && id == 'maxval') {
      this.maxval = event;
      this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval);
      this.categoryFilter()
    }
    else {
      this.minval = 0;
      this.maxval = 999999;
      this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval);
      this.categoryFilter()

    }
  }


  //color filter
  colorFilterFunction(data: any) {

    if (data != 'unchecked') {
      this.color = data
      this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval + ' ' + this.color);
      this.categoryFilter()
    }
    else {
      this.color = ""
      this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval);
      this.categoryFilter()
    }

  }

  //warranty filter
  warrantyFilterFunction(data: any) {

    if (data != 'unchecked') {
      this.warranty = data
      this.categoryResults = this.categoryResults.filter(
        (res) => res.warrantyPeriod === this.warranty
      );
    }
    else {
      this.warranty = ""
      if (this.color) {
        this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval + ' ' + this.color);
        this.categoryFilter()
      }
      else {
        this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval);
        this.categoryFilter()
      }

    }



  }

  //warranty filter
  rating: any;
  ratingFilterFunction(data: any) {
    console.log(data)

    if (data != 'unchecked') {
      this.rating = data
      this.categoryResults = this.categoryResults.filter(
        (res) => res.rating === this.rating
      );
    }
    else {
      this.rating = ""
      if (this.color) {
        this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval + ' ' + this.color);
        this.categoryFilter()
      }
      else {
        this.categoryTerm$ = of(this.router.snapshot.params.tags + ' ' + this.minval + ' ' + this.maxval);
        this.categoryFilter()
      }

    }



  }





}
