import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {

  }

  showBrandsAmount = 5

  setShowBrandsAmount() {
    this.showBrandsAmount === 5 ? this.showBrandsAmount = this.colorArray.length : this.showBrandsAmount = 5
  }

  @Input() icon: string;
  @Input() title: string;

  //Color Filter
  @Input() colorArray: any = [];
  @Output() colorFilterFunction: EventEmitter<any> = new EventEmitter();

  isChecked: any;
  isCheckedVal: any;

  onCheckbox(e: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedVal = e.target.value;
    if (e.target.checked) {
      this.colorFilterFunction.emit(e.target.value);
    }
    else {
      this.colorFilterFunction.emit('unchecked');
    }
  }


}
