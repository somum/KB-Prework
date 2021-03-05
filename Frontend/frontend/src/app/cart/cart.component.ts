import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  noOfproduct: number;

  constructor(private myCart: ProductService) {

    this.myCart.myCart$.subscribe((data) => {
      this.products = data;
    }
    )

  }


  ngOnInit(): void { }

  cartStatus() {
    this.toogleCartportal()
  }

  cartportal = false
  toogleCartportal() {
    this.cartportal = !this.cartportal
  }


  calcTotal() {
    if (this.products) {
      return this.products.reduce((acc, prod) => acc += prod.num, 0)
    }
    else {
      return null;
    }
  }


  addProductToCart(product) {
    const productExistInCart = this.products.find(({ name }) => name === product.name);
    if (!productExistInCart) {
      this.products.push({ ...product, num: 1 });
      return;
    }
    productExistInCart.num += 1;

  }

  subProductToCart(product) {
    const productExistInCart = this.products.find(({ name }) => name === product.name);
    if (productExistInCart) {
      productExistInCart.num -= 1;
    }


  }

  removeProduct(product) {
    this.products = this.products.filter(({ name }) => name !== product.name)

  }


}
