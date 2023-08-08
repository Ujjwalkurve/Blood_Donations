import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receiver } from '../receiver';
import { ReceiverService } from '../receiver.service';

@Component({
  selector: 'app-update-receiver',
  templateUrl: './update-receiver.component.html',
  styleUrls: ['./update-receiver.component.css']
})
export class UpdateReceiverComponent implements OnInit {
  receiverId:any;
  receiver=new Receiver("",0,"","","","","","","");
  constructor(private activatedRouter:ActivatedRoute, private receiverService:ReceiverService, private route:Router){}
  public onSubmit(){
    this.receiverService.updateReceiver(this.receiver).subscribe(
      (data:any)=>{
        this.receiver=data;
        alert("data update successfully");
        this.route.navigate(['/user']);
      }
    )
  
  }
  ngOnInit(): void {
    this.receiverId=this.activatedRouter.snapshot.params['receiverId'];
    this.receiverService.getReceiverById(this.receiverId).subscribe(
      (data:any)=>{
       
        this.receiver=data;
      }
    )
  }

}
