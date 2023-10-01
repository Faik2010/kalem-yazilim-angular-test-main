import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  getInvoices():Observable<responseModel>{
    let api = this.apiUrl + "invoices"
    return this.httpClient.get<responseModel>(api)
  }
  singleInvoice(id:number):Observable<responseModel>{
    let api=this.apiUrl + "invoices/" + id
    return this.httpClient.get<responseModel>(api)
  }
}
