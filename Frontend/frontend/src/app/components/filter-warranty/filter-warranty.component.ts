import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-warranty',
  templateUrl: './filter-warranty.component.html',
  styleUrls: ['./filter-warranty.component.css']
})
export class FilterWarrantyComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }

  showBrandsAmount = 5

  setShowBrandsAmount() {
    this.showBrandsAmount === 5 ? this.showBrandsAmount = this.warrantyArray.length : this.showBrandsAmount = 5
  }

  @Input() icon: string;
  @Input() title: string;

  isChecked: any;
  isCheckedVal: any;

  //Warranty Filter
  @Input() warrantyArray: any = [];
  @Output() warrantyFilterFunction: EventEmitter<any> = new EventEmitter();

  onCheckbox(e: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedVal = e.target.value;
    if (e.target.checked) {
      console.log(e.target.value)
      this.warrantyFilterFunction.emit(e.target.value);
    }
    else {
      console.log('unchecked')
      this.warrantyFilterFunction.emit('unchecked');
    }
  }

}
