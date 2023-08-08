import { Component } from '@angular/core';
import { ReceiverService } from '../receiver.service';
import { Router } from '@angular/router';
import { Receiver } from '../receiver';

@Component({
  selector: 'app-register-receiver',
  templateUrl: './register-receiver.component.html',
  styleUrls: ['./register-receiver.component.css']
})
export class RegisterReceiverComponent {
  constructor(private donorService : ReceiverService,private route:Router){}
  receiver=new Receiver("",0,"","","","","","","");
  msg = ' ';
  
  public onSubmit(){
    console.log(this.receiver);
    this.donorService.registerReceiver(this.receiver).subscribe(
      (data:any)=>{
        alert("registration completed");
        this.route.navigate(['/loginReceiver']);
      }
    );
  
  }

}
