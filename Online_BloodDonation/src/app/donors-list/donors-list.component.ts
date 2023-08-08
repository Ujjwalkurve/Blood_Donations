import { Component } from '@angular/core';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css']
})
export class DonorsListComponent {
  donorList:any;
  constructor(private donorService:DonorService,private router : Router){}
  public ngOnInit():void{
    this.allDonors();
  } 
  public allDonors(){
    this.donorService.getAllDonors( ).subscribe(
      (data:any)=>{
        this.donorList=data;
      }
    )
  }

}
