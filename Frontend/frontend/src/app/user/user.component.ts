import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private produc: ProductService) { }
  userInfo: any;
  ngOnInit(): void {

    this.produc.getCurrentUser(16).subscribe((result: any) => {
      // console.warn(result)
      this.userInfo = result

      console.log(this.userInfo);


    })

  }

  //user dropdown
  menu = false
  setMenu(val) {
    this.menu = val
  }



}
