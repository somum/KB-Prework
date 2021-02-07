import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorenavbar',
  templateUrl: './explorenavbar.component.html',
  styleUrls: ['./explorenavbar.component.css']
})
export class ExplorenavbarComponent implements OnInit {


  @Input() tagsArray: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  sortBy = [
    { name: "Recommended", value: 0 },
    { name: "Best Match", value: 1 },
    { name: "Higher Price", value: 2 },
    { name: "Lower Price", value: 3 },
  ]

  sortByValue = 0

  setSortByValue(val) {
    this.sortByValue = val
  }

  showSortBy = false;

  toogleShowSortBy() {
    this.showSortBy = !this.showSortBy;
  }

  shutShowSortBy() {
    this.showSortBy = false
  }

}
