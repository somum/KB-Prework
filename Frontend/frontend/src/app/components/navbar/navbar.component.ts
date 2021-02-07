import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';


//search
import { Subject } from 'rxjs/Subject';
import { ProductService } from '../expansionpanel/../../product.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ProductService]//search
})
export class NavbarComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();




  constructor(private searchService: ProductService) {

    //productsearch
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
        console.log(results)
      });

  }

  alert: boolean = true
  ngOnInit(): void {
  }

  closeAlert() {
    this.alert = false
  }







}
