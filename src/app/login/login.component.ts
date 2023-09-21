import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { loginModel } from '../models/loginModel';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm:FormGroup
  response:any
  constructor(
    private loginService:LoginService,
    private loginModel:loginModel,
    private formBuilder:FormBuilder,
    private router:Router,
    
  ) { }

  ngOnInit(): void {
    this.createLoginForm()
  }
  login(){
    this.loginModel.username=this.loginForm.value.username
    this.loginModel.password=this.loginForm.value.password
    this.loginService.login(this.loginModel).subscribe((res)=>{
      this.response=res
      
        this.router.navigate(['/products'])
     
     
     

    },err=>{
      console.log(err.error)
    })
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      username:[""],
      password:[""],
    })
  }

}
