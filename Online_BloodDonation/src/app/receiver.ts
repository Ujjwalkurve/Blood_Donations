export class Receiver
{
        name:string ;
         password:string;
         confirmPassword:string;
         email:string;
         mobileNumber:string;
         age:number;
         gender:string;
         address:string;
         state:string;
         constructor(
            name:string ,
         age:number,
         gender:string,
         password:string,
         confirmPassword:string,
         email:string,
         mobileNumber:string,
         address:string,
         state:string

         ){
            this.name=name;
            this.age=age;
            this.gender=gender;
            this.password=password;
            this.confirmPassword=confirmPassword;
            this.email=email;
            this.mobileNumber=mobileNumber;
            this.address=address;
            this.state=state;
         }
    
    
  

    
}