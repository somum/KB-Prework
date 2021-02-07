import { Component, OnInit } from '@angular/core';

//search
import { Subject } from 'rxjs/Subject';
import { ProductService } from '../expansionpanel/../../product.service'
@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css'],
  providers: [ProductService]//search
})
export class SearchproductComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: ProductService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
        console.log(results)
      });
  }

  ngOnInit(): void {
  }

}
