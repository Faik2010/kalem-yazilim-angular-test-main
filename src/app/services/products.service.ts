
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  getProducts():Observable<responseModel>{
    let api = this.apiUrl + "products"
    return this.httpClient.get<responseModel>(api)
  }
}
