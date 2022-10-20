import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardProductsService {

  constructor(
    private http: HttpClient
  ) { }
}

getAllProducts(){
  return this.http.get<Product[]>('https://fakestoreapi.com/products')
}