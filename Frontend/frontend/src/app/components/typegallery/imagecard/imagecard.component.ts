import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css']
})
export class ImagecardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() image: string
  @Input() title: string

}
