import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SigninComponent } from './signin/signin.component';
import { PaddyComponent } from './paddy/paddy.component';
import { SunflowerComponent } from './sunflower/sunflower.component';
import { SugarcaneComponent } from './sugarcane/sugarcane.component';
import { CottonComponent } from './cotton/cotton.component';
import { ForgotComponent } from './forgot/forgot.component';
import { OtpComponent } from './otp/otp.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { PesticidesComponent } from './pesticides/pesticides.component';
import { ResetComponent } from './reset/reset.component';
import { ProductComponent } from './product/product.component';





const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Service',component:ServiceComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Adminlogin',component:AdminloginComponent},
  {path:'Signin',component:SigninComponent},
  {path:'Paddy',component:PaddyComponent},
  {path:'Sunflower',component:SunflowerComponent},
  {path:'Sugarcane',component:SugarcaneComponent},
  {path:'Cotton',component:CottonComponent},
  {path:'Forgot',component:ForgotComponent},
  {path:'Otp',component:OtpComponent},
  {path:'Fertilizers',component:FertilizersComponent},
  {path:'Pesticides',component:PesticidesComponent},
  {path:'Reset',component:ResetComponent},
  {path:'Product',component:ProductComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
