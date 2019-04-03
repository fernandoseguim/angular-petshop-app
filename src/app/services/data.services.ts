import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  getProdutos() {
    return this.httpClient.get<Product[]>('http://localhost:3000/v1/products');
  }

}
