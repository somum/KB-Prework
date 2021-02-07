import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isChecked: any;
  isCheckedVal: any;

  //ratingFilter
  @Output() ratingFilterFunction: EventEmitter<any> = new EventEmitter();

  onCheckbox(e: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedVal = e.target.value;

    if (e.target.checked) {
      this.ratingFilterFunction.emit(e.target.value);
    }
    else {
      this.ratingFilterFunction.emit('unchecked');
    }

  }


}
