import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//search
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

    //cart
    this.myCart$ = this.myCartSubject.asObservable();

  }

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

  //product search(title based)
  searchTitle(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntriesTitle(term));
  }

  searchEntriesTitle(term) {
    console.log(this.baseUrl + this.queryUrl + term + this.endUrl)
    return this.http
      .get(this.baseUrl + this.queryUrl + term + this.endUrl)
      .map(res => res);
  }

  //product search(All)
  searchAll(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntriesAll(term));
  }

  searchEntriesAll(term) {
    console.log(this.baseUrl + this.queryUrl + term + this.endUrl)
    return this.http
      .get(`${this.categorybaseUrl}(title:*${term}*)OR(description:*${term}*)OR(tags:*${term}*)`)
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



  //advanceSearchAudio

  searchAdvanceListAudio(term) {
    return this.http.get(this.baseUrl + this.queryUrl + term + this.endUrl)
  }

  //advanceSearchImage

  searchAdvanceListImage(term) {
    return this.http.get(`${this.categorybaseUrl}(id:'${term}')`)
  }


  //cart Information

  myCart$: Observable<any>;
  private myCartSubject = new Subject<any>();

  myCart(data) {
    console.log(data);
    this.myCartSubject.next(data);
  }


  //user Information
  userUrl: string = 'http://localhost:9090/registration'
  getCurrentUser(id: any) {
    return this.http.get(`${this.userUrl}/${id}`)
  }




}


