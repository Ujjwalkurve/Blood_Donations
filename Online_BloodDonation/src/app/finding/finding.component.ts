import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { FindDonorComponent } from '../find-donor/find-donor.component';

@Component({
  selector: 'app-finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css']
})
export class FindingComponent   implements OnInit{
  donorList:any;
 
  matchedDonors: any[] = [];

  constructor(private donorService: DonorService) {
    // Initialize matched donors with empty array on component load
    
  }
  
  public ngOnInit(): void {
   
    this.allDonors();
  }
  
  
  
 
  public allDonors(){
    this.donorService.getAllDonors().subscribe(
      (data:any)=>{
        this.donorList=data;
      }
    );
    }
  
  
  
  
  
  
  
  
  
  
  
  /*
findList:any;
constructor(private donorService:DonorService,private router : Router,private donor:Donor){}
  public ngOnInit(): void {
   
  }
  public findDonor(){
    this.donorService.findDonor(this.donor.bloodGroup,this.donor.address).subscribe(
      (data:any)=>{
        alert(" FFcompleted");
        this.findList=data;
      }
    );
  }*/

}
