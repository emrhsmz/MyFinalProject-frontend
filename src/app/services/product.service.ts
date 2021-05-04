import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listReponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44324/api/Products/getall';

  constructor(private httpClient:HttpClient) { }

    getProducts():Observable<listResponseModel<Product>> {
    return this.httpClient
      .get<listResponseModel<Product>>(this.apiUrl)
    }
  }