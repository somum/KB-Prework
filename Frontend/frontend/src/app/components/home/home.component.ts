import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../expansionpanel/../../product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collection: any = []
  tagsArray: any = [];

  constructor(private router: ActivatedRoute, private produc: ProductService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)

    this.produc.getList().subscribe((result) => {
      this.collection = result
      //get all tags
      this.tagsArray = this.collection.map(u => u.tags)
      //unique tags  
      this.tagsArray = this.tagsArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      })
    })




  }

}
