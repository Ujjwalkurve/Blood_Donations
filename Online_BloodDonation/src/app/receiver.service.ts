import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receiver } from './receiver';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  constructor(private httpclient:HttpClient) { }
  private url="http://localhost:8086/receiver";
  public registerReceiver(receiver:Receiver){
    return this.httpclient.post('http://localhost:8086/receiver/create',receiver);
  }
  public loginReceiver(receiver:Receiver){
    return this.httpclient.post('http://localhost:8086/receiver/login',receiver)
  }
  public updateReceiver(receiver:Receiver){
   
      return this.httpclient.put(`${this.url}/`,receiver);
    
  }
  
  
  public getReceiverById(receiverId:number){
    return this.httpclient.get(`${this.url}/${receiverId}`);
    
  }
  
}
