import { Injectable } from '@angular/core';
import { Iproduct } from '../model/data';
import { product } from '../const/data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = environment.baseUrl;
  PRODUCT_URL: string = `${this.BASE_URL}/products`;

  productArr: Array<Iproduct> = product;
  constructor(private _http: HttpClient) {}

  fetchallproduct(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(`${this.PRODUCT_URL}/filter`);
  }

  // fetchallproduct(val: string): Observable<Iproduct[]> {
  // const params = new HttpParams().set('category', val);
  // return this._http.get<Iproduct[]>(`${this.PRODUCT_URL}/filter`, { params });
  // return of(this.productArr);
  // }

  getobj(prodId: string): Observable<Iproduct> {
    return this._http.get<Iproduct>(`${this.PRODUCT_URL}/${prodId}`);
    // return this.productArr.find((f) => f._id == prodId)!;
  }
}
