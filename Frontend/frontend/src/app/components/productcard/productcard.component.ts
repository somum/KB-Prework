import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  @Input() src: string
  @Input() name: string
  @Input() category: string
  @Input() price: string
  @Input() itemid: any
  @Input() rating: any

  star(value) {
    return parseInt(value)
  }
  blank(value) {
    return 5 - parseInt(value)
  }


}
