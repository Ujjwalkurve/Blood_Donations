import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router :Router){}
  public signUp(){
    this.router.navigate(['/registerDonor']);
  }
  public signIn(){
    this.router.navigate(['/loginDonor']);
  }
  public find(){
    this.router.navigate(['/registerReceiver']);
  }
  public register(){
    this.router.navigate(['/registerReceiver']);
  }
  public login(){
    this.router.navigate(['/loginReceiver']);
  }
  public allDonors(){
    this.router.navigate(['/donors']);
  }
 showAlert(){
  alert('Receiver Login First');
 }
  

}
