import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-donor',
  templateUrl: './find-donor.component.html',
  styleUrls: ['./find-donor.component.css']
})
export class FindDonorComponent {
  donorList:any;

  constructor(private donorService : DonorService,private route:Router){}
  donor=new Donor("",0,0,"","","","","","","","");
  msg = ' ';
  
 bloodGroup: any;
  address: any;


  findDonor() {
    
    const matchedDonors = this.donorService.getDonorsByBloodGroupAndAddress(this.address,this.bloodGroup ).subscribe(
      (data:any)=>{
        console.log(data);
        this.donorList=data;
      }
    )
    
  }
}