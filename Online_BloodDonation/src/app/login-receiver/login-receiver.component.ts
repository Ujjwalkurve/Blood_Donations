import { Component } from '@angular/core';
import { ReceiverService } from '../receiver.service';
import { Router } from '@angular/router';
import { Receiver } from '../receiver';

@Component({
  selector: 'app-login-receiver',
  templateUrl: './login-receiver.component.html',
  styleUrls: ['./login-receiver.component.css']
})
export class LoginReceiverComponent {
  constructor(private donorService : ReceiverService,private route:Router){}
  receiver=new Receiver("",0,"","","","","","","");
  msg = ' ';
  
  public onSubmit(){
    this.donorService.loginReceiver(this.receiver).subscribe(
      (data:any)=>{
        alert("login completed");
        this.route.navigate(['/find-donor']);
      }
    );

  }
}
