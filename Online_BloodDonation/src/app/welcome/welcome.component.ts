import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from '../donor.service';
import { Donor } from '../donor';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

donorToUpdate= {
  donor_id:"",
  name:"",
  email:"",
};
  donor_id:any;

  constructor(private donorService:DonorService,private router :Router, private activatedrout:ActivatedRoute){}


ngOnInit(): void {
  this.donor_id = this.activatedrout.snapshot.params['donor_id'];
}



  donor=new Donor("",0,0,"","","","","","","","");

  public find(){
    this.router.navigate(['/findDonors']);
  }
  public updateReceiver(){
    this.router.navigate(['/updateReceiver']);
  }
  // public delete(donor_id){
  //   this.router.navigate(['/donors']);
  // }
  public updateDonor(){
    this.router.navigate(['/donor-update',this.donor_id]);
  }
  deleteDonor(){
    
    this.donorService.deleteDonor(this.donor_id).subscribe(
      (resp)=>{
        console.log(resp);
        alert("User Deleted");
        this.router.navigate(['/home']);
      },
      (err)=> console.log(err)
    );
  }

}
