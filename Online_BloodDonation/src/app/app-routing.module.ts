import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { LoginDonorComponent } from './login-donor/login-donor.component';
import { HomeComponent } from './home/home.component';
import { RegisterReceiverComponent } from './register-receiver/register-receiver.component';
import { LoginReceiverComponent } from './login-receiver/login-receiver.component';
import { DonorComponent } from './donor/donor.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { FindingComponent } from './finding/finding.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateReceiverComponent } from './update-receiver/update-receiver.component';
import { AwarenessComponent } from './awareness/awareness.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { DonorUpdateComponent } from './donor-update/donor-update.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"registerDonor",component:RegisterDonorComponent},
  {path:"loginDonor",component:LoginDonorComponent},
  {path:"registerReceiver",component:RegisterReceiverComponent},
  {path:"loginReceiver",component:LoginReceiverComponent},
  {path:"donors",component:DonorComponent},
  {path:"findDonors",component:FindDonorComponent},
  {path:"finding",component:FindingComponent},
  {path:"welcome/:donor_id",component:WelcomeComponent},
  {path:"updateReceiver",component:UpdateReceiverComponent},
  {path:"awareness",component:AwarenessComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"donors-list",component:DonorsListComponent},
  {path:"donor-update/:donor_id",component:DonorUpdateComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"find-donor", component:FindDonorComponent},
  {path: "footer", component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
