import { Injectable } from '@angular/core';
import { Donor } from './donor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
myurl="http://localhost:8086/donor/se";
  url="http://localhost:8086/donor";
  gall="http://localhost:8086/donor/all";
  apiUrl = 'http://localhost:8086/donor/:donor_id';
  updateurl="http://localhost:8086/donor";
  
 geturl= "http://localhost:8086/donor/getDonor";
  constructor(private httpclient:HttpClient) { }
  public registerDonor(donor:Donor){
    return this.httpclient.post('http://localhost:8086/donor/create',donor);
  }
  public loginDonor(donor:Donor){
    return this.httpclient.post('http://localhost:8086/donor/login',donor)
  }

  public deleteDonor(donor_id: any){
    return this.httpclient.delete<any>(`${this.url}/${donor_id}`);
  }


  public getAllDonors()
  {
return this.httpclient.get("http://localhost:8086/donor/all");
  }
public findDonor(bloodGroup: string, address: string){
  return this.httpclient.get<any>(`http://localhost:8086/donor/find?bloodGroup=${bloodGroup}&address=${address}`);
}
getDonors(page: number){
  return this.httpclient.get(this.gall + '?page=' + page);
}

updateDonorProfile(donor_id: number, updatedData: any): Observable<any> {
  //const url = `${this.apiUrl}/:donor_id`; 
  return this.httpclient.put<any>(`${this.updateurl}/${donor_id}`, updatedData);
}


donors: any[] = [
  // Here, you can define some example donor data. Replace it with actual data from your backend or database.
  { name: 'Donor 1', bloodGroup: 'A+', address: 'cherial' },
  { name: 'Donor 2', bloodGroup: 'B+', address: 'Address 2' },
  { name: 'Donor 3', bloodGroup: 'O-', address: 'Address 3' },
  // Add more donors as needed
];

getMatchedDonors(bloodGroup: string, address: string): any[] {
  // Implement the logic to find matched donors based on blood group and address
  const matchedDonors = this.donors.filter(
    donor => donor.bloodGroup === bloodGroup && donor.address === address
  );

  return matchedDonors;
}

  

 public getDonorsByBloodGroupAndAddress( address: string,bloodGroup: string )  {
   return this.httpclient.get<any>(`${this.myurl}/${address}/${bloodGroup}`);
  }



  public getDonorById(donor_id: string){
    return this.httpclient.get<any>(`${this.geturl}/${donor_id}`);
    
  }

}
  
