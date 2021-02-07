import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownbar',
  templateUrl: './dropdownbar.component.html',
  styleUrls: ['./dropdownbar.component.css']
})
export class DropdownbarComponent implements OnInit {

  constructor() { }


  @Input() tagsArray: any = [];

  ngOnInit(): void {

  }

}
