import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//search
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:9090/products"
  //search
  baseUrl: string = 'http://localhost:9090/findproducts';
  queryUrl: string = '?search=(title:*';
  endUrl: string = '*)';



  //category
  categorybaseUrl: string = "http://localhost:9090/findproducts?search=";
  categoryendUrl: string = "')";


  //filter
  filter1: string;


  getList() {
    return this.http.get(this.url)
  }

  getCurrentProd(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }

  getCurrentCategoryProd(tags: any) {
    // return this.http.get(`${this.url}/${tags}`)
    console.log(`${this.categorybaseUrl}(tags:'${tags}')`)
    return this.http.get(`${this.categorybaseUrl}(tags:'${tags}')`)
  }

  //product search
  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    console.log(this.baseUrl + this.queryUrl + term + this.endUrl)
    return this.http
      .get(this.baseUrl + this.queryUrl + term + this.endUrl)
      .map(res => res);
  }

  //Category product search
  categorySearch(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.categorySearchEntries(term));
  }

  categorySearchEntries(term) {

    console.log(term.split(' ')[3])

    if (term.split(' ')[3]) {
      console.log(term.split(' ')[3])
      this.filter1 = `${this.categorybaseUrl}(tags:'${term.split(' ')[0]}')AND((price>${term.split(' ')[1]})AND(price<${term.split(' ')[2]}))AND(color:${term.split(' ')[3]})`
      console.log(this.filter1)
    }

    else {
      this.filter1 = `${this.categorybaseUrl}(tags:'${term.split(' ')[0]}')AND((price>${term.split(' ')[1]})AND(price<${term.split(' ')[2]}))`
      console.log(this.filter1)
    }

    return this.http
      .get(this.filter1)
      .map(res => res);
  }


  //visual similar product
  visualSimilarUrl = 'http://127.0.0.1:5000/similar_image'
  visualSimilar = ""

  getvisualSimilarProd(imgId: any) {
    // return this.http.get(`${this.url}/${tags}`)
    console.log(`${this.visualSimilarUrl}/${imgId}`)
    return this.http.get(`${this.visualSimilarUrl}/${imgId}`)
  }

  //product suggest by user ratings
  SuggestByUsersUrl = 'http://127.0.0.1:5000/product-suggestion'

  getSuggestByUsers(userId: any) {
    // return this.http.get(`${this.url}/${tags}`)
    console.log(`${this.SuggestByUsersUrl}/${userId}`)
    return this.http.get(`${this.SuggestByUsersUrl}/${userId}`)
  }



}


