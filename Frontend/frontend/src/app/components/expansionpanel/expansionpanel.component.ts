import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expansionpanel',
  templateUrl: './expansionpanel.component.html',
  styleUrls: ['./expansionpanel.component.css']
})
export class ExpansionpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;

  expanded = false

  toogle() {
    this.expanded = !this.expanded;
  }

}
