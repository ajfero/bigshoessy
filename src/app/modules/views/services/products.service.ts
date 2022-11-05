import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';
//Service request from angular.
import { HttpClient } from '@angular/common/http';
//Models
import { createProductDTO, Product } from '../models/card.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productChosen: Product = {
    id: '',
    brand: '',
    colorway: '',
    gender: '',
    media: {
      imageUrl: '',
      smallImageUrl: '',
      thumblrUrl: ''
    },
    retailPrice: 0,
    styleId: '',
    title: '',
    year: 0,
  };
  // Vars
  private apiUrl = 'https://example-data.draftbit.com/sneakers?id=';
  private apiUrlList = 'https://example-data.draftbit.com/sneakers?_limit=50';
  constructor(
    private http: HttpClient
  ) { }
  //Get list of products service.
  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrlList);
  }
  getOneProduct() {
    return this.http.get<Product[]>("https://example-data.draftbit.com/sneakers?_limit=2");
  }
  detailProduct(id: string) {
    return this.http.get<Product[]>(`${this.apiUrl}${id}`);
  }
  //Type CREATE
  //Está comentado porque nuestro create trae datos de nuestro product para rellenar de forma hardcodeada, ya que nuestro metodo
  /////////////////////////////////////////
  // create(dto: createProductDTO) {
  //   return this.http.post<Product>(this.apiUrlList, dto);
  // }
  //Type UPDATE (PUT & PATCH)
  // update(id: string, dto: any) {
  //   return this.http.put<Product>(`${this.apiUrl}${id}`, dto);
  // }
  //Type DELETE.
}