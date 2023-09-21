import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }
  login(loginModel:loginModel){
    let api=this.apiUrl + "login?username=" + loginModel.username + "&password=" + loginModel.password
    return this.httpClient.post(api,loginModel)
  }
}
