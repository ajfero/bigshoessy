import { Injectable } from '@angular/core';
//Service request from angular.
import { HttpClient } from '@angular/common/http';
//Models
import { Product } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://example-data.draftbit.com/sneakers?_limit=50';

  constructor(
    private http: HttpClient
  ) { }


  //Get list of products service.
  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }


  getOneProduct() {
    return this.http.get<Product[]>("https://example-data.draftbit.com/sneakers?_limit=2");

  }


}
