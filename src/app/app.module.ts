import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    LoginComponent,
    RegisterComponent,
    AdminloginComponent,
    SigninComponent,
    PaddyComponent,
    SunflowerComponent,
    SugarcaneComponent,
    CottonComponent,
    ForgotComponent,
    OtpComponent,
    FertilizersComponent,
    PesticidesComponent,
    ResetComponent,
    ProductComponent
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
