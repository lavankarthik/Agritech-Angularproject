import { Component, OnInit } from '@angular/core';
// import { UserloginService } from '../userlogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  email:any;
  password:any;

  onSubmit(form:any){
    console.log(form.value);
    // this.ValidateLogin(form.value);
  }
  // ValidateLogin(data:any){
  //   return this.UserloginService.ValidateLogin(data).subscribe((response:{})=>{
  //     let data:any=response;
  //     console.groupCollapsed(data);

  //     if (data.length>0){
  //       alert("login sucessfull");

  //     }
  //     else {
  //       alert("login failure");
  //     }
  //   });
  // }
} 
  

