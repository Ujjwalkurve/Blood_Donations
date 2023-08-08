import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginDonorComponent } from './login-donor/login-donor.component';
import { RegisterReceiverComponent } from './register-receiver/register-receiver.component';
import { LoginReceiverComponent } from './login-receiver/login-receiver.component';
import { DonorComponent } from './donor/donor.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { FindingComponent } from './finding/finding.component';
import { Donor } from './donor';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateReceiverComponent } from './update-receiver/update-receiver.component';
import { AwarenessComponent } from './awareness/awareness.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DonorUpdateComponent } from './donor-update/donor-update.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { DonorHomeComponent } from './donor-home/donor-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterDonorComponent,
    LoginDonorComponent,
    RegisterReceiverComponent,
    LoginReceiverComponent,
    DonorComponent,
    ReceiverComponent,
    FindDonorComponent,
    FindingComponent,
    WelcomeComponent,
    UpdateReceiverComponent,
    AwarenessComponent,
    NavbarComponent,
    AboutUsComponent,
    DonorsListComponent,
    DonorUpdateComponent,
    ContactUsComponent,
    FooterComponent,
    DonorHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   MatPaginatorModule,
   NgxPaginationModule
   

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
