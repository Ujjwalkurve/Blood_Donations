
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donor-update',
  templateUrl: './donor-update.component.html',
  styleUrls: ['./donor-update.component.css']
})
export class DonorUpdateComponent implements OnInit{
  donor:Donor;
  donor_id:any;
  updatedData: any;
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute,private donorService: DonorService){
    this.donor ={
      name: '',
      email: '',
      bloodGroup: '',
      gender: '',
      age: 0,
       weight: 0,
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      address: '',
      state: ''
    };
  }


  //  constructor(
  //     private route:ActivatedRoute,
  //    private donorService: DonorService
  //  ) { }

   ngOnInit(): void {
    this.donor_id = this.route.snapshot.params['donor_id']; 
   this.donorService.getDonorById(this.donor_id).subscribe
   ((data: any) => this.donor=data);

   console.log(this.donor);

   }
  //  fetchDonorProfile(){
  //   this.donorService.getDonorById(this.donor_id).subscribe(
  //     (data) =>{
  //       this. updatedData=data;
  //     },
  //     (error)=>{}
  //     );
    
  //  }
toggleEdit(){
  this.isEditing =!this.isEditing;
}


   saveChanges(){
    this.donorService.updateDonorProfile(this.donor_id, this. updatedData).subscribe(
      (data)=>{
        this.isEditing = false;
      },
      (error)=>{}
    )
   }
  data(donor_id: number, data: any) {
    throw new Error('Method not implemented.');
  }





   updateDonorProfile(): void{
    
   this.donorService.updateDonorProfile(this.donor_id,this.donor).subscribe(
      (response:any) => {
       console.log('Profile updated successfully!');
    },
       (error: any) => {
        console.error('Error updating profile:', error);
      }
    );

    }
  }
  //  onSubmit() {
  //    // Fetch donor details by registration code from the backend
  //    this.donorService.getDonorByRegistrationCode(this.registrationCode).subscribe(
  //      (donor: Donor) => {
  //        // Update the form fields with the fetched donor data
  //        this.donor = donor;
  //        this.msg = ''; // Clear any previous error messages
  //      },
  //      (error) => {
  //        this.msg = 'Invalid registration code. Please enter a valid code.'; // Display error message if registration code is invalid
  //      }
  //    );
   
  
  //  public onSubmit():void {
  //    console.log(this.donor);
  //    this.donorService.UpdateById(this.donor_id).subscribe(
  //      (data:any)=>{
  //        alert("registration completed");
  //        this.route.navigate(['/loginDonor']);
  //      }
  //    );

  
   
  //  donor_id(donor_id: any) {
  //    throw new Error('Method not implemented.');
  



