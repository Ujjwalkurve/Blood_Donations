export class Donor
{
        name:string ;
         password:string;
         confirmPassword:string;
         email:string;
         mobileNumber:string;
         age:number;
         weight:number;
         gender:string;
         bloodGroup:string;
         address:string;
         state:string;
         constructor(
            name:string ,
         age:number,
         weight:number,
         gender:string,
         bloodGroup:string,
         password:string,
         confirmPassword:string,
         email:string,
         mobileNumber:string,
         address:string,
         state:string

         ){
            this.name=name;
            this.age=age;
            this.weight=weight;
            this.gender=gender;
            this.bloodGroup=bloodGroup;
            this.password=password;
            this.confirmPassword=confirmPassword;
            this.email=email;
            this.mobileNumber=mobileNumber;
            this.address=address;
            this.state=state;
         }
    
    
  

    
}