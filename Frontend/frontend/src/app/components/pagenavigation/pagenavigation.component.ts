import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenavigation',
  templateUrl: './pagenavigation.component.html',
  styleUrls: ['./pagenavigation.component.css']
})
export class PagenavigationComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  routelink: any;

  ngOnInit(): void {
    this.routelink = this.router.snapshot.params.tags;
  }

}
