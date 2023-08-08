import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { count } from 'rxjs';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  donorList: any;
 allDonor: number = 0; 
 pagination: number = 1;

constructor(private donorService:DonorService,private router : Router){}
  public ngOnInit(): void {
    this.allDonors();
    this.fetchDonors(); 
  }
  
  public allDonors(){
    this.donorService.getAllDonors().subscribe(
      (data:any)=>{
        this.donorList=data;     
      }
    );
  }
 fetchDonors(){
  this.donorService.getDonors(this.pagination).subscribe((res:any)=>{
    this.donorList=res.data;
    this.allDonor=res.total;
    console.log(res.total);
  });
  
  }
  renderPage(event: number){
    this.pagination =event;
    this.fetchDonors();
 }

}
