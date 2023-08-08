package com.edubridge.controller;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.edubridge.entity.Donor;

import com.edubridge.entity.Receiver;

import com.edubridge.exception.ResourceNotFoundException;
import com.edubridge.repository.ReceiverRepository;
import com.edubridge.service.ReceiverService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/receiver")
public class ReceiverController {
	@Autowired
	public ReceiverService receiverService;
	@Autowired
	public ReceiverRepository receiverRepository;
	@PostMapping("/create")
    public ResponseEntity<?> createReceiver(@Validated @RequestBody Receiver receiver) {
		
		Receiver receiver1=this.receiverService.save(receiver);
		if(receiver1!=null) {
			return new ResponseEntity<Receiver>(receiver1,HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<String>("confirm password did not matched",HttpStatus.BAD_REQUEST);
		}
		
	}
	
	// Get Receiver Data By their Id
	@GetMapping("/getReceiver/{receiver_id}")
	public Receiver fetchRDetailsById(@PathVariable Long receiver_id) {
		return receiverService.getReceiverById(receiver_id);
	}
		
	
	// Get Receivers
	@GetMapping("/all")
	public ResponseEntity<?> getAllReceivers() {
		System.out.println("getAll");
		//return receiverService.getAll();
		if(this.receiverService.getAll().size()>0)
		{
			return new ResponseEntity<List<Receiver>>(this.receiverService.getAll(),HttpStatus.OK);
		}
		else
		{
		 return new ResponseEntity<String>("no receivers found",HttpStatus.BAD_REQUEST);	
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Receiver receiver){
		Receiver receiver1=this.receiverService.login(receiver);
		if(receiver1!=null) {
		return new ResponseEntity<Receiver>(receiver1,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Receiver not found ",HttpStatus.BAD_REQUEST);
		}
	}
	@DeleteMapping("/{receiver_id}")
	public List<Receiver> delete(@PathVariable("receiver_id") long receiverId){
	System.out.println("inside delete ");
	List<Receiver> r=this.receiverService.delete(receiverId);
	return r;
	}
	//update
		@PutMapping("/{receiver_id}")
		public ResponseEntity<Receiver> updateReceiver(@PathVariable("receiver_id") long receiverId,@RequestBody Receiver receiver) throws ResourceNotFoundException
		{
			return new ResponseEntity<Receiver>(this.receiverService.updateReceiver(receiver, receiverId),HttpStatus.OK);
		}
}
