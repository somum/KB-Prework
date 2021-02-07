import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../expansionpanel/../../product.service';
@Component({
  selector: 'app-intemscarousel',
  templateUrl: './intemscarousel.component.html',
  styleUrls: ['./intemscarousel.component.css']
})
export class IntemscarouselComponent implements OnInit {

  constructor(private produc: ProductService) { }

  collection: any = []
  ngOnInit(): void {

    this.produc.getList().subscribe((result) => {
      this.collection = result
      console.log(result)

    })

  }

  products = [
    { src: "https://uploads-ssl.webflow.com/5d552994548be47b97db38c2/5dd334dab513208089349904_Linne%203.png" },
    { src: "https://seacare.com/wp-content/uploads/2017/03/17-5-400x400.png" },
    { src: "https://cdn.shopify.com/s/files/1/0270/7983/5732/products/Antiagingfirstcareepicosm.png?v=1600023540" },
    { src: "https://media.allure.com/photos/5ed5737170ff090008b796b1/1:1/w_1280,h_1280,c_limit/Cake%20Beauty%20The%20Curl%20Friend%20Defining%20Curl%20Cream.png" },
    { src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F09%2F03%2FBitten_Lip_Tint_104650_v1_SPL_940x940_c10352e1-f9c4-49e4-8a02-a05d40e4f434.png" },
  ]

}
