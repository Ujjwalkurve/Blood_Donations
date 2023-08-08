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
import com.edubridge.service.DonorService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/donor")
public class DonorController {
	private static final int Donor = 0;
	@Autowired
	public DonorService donorService;
	@PostMapping("/create")
	public ResponseEntity<?> createDonor(@Validated @RequestBody Donor donor) {
		Donor donor1=this.donorService.save(donor);
		if(donor1!=null) {
			return new ResponseEntity<Donor>(donor1,HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<String>("confirm password did not matched",HttpStatus.BAD_REQUEST);
		}
		
	}
	
	//for delete donor
	@DeleteMapping("/{donor_id}")
	public List<Donor> delete(@PathVariable("donor_id") long donorId){
	System.out.println("inside delete ");
		return this.donorService.delete(donorId);
	}
	
	//for login
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Donor donor){
		Donor donor1=this.donorService.login(donor);
		if(donor1!=null) {
		return new ResponseEntity<Donor>(donor1,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("donor not found ",HttpStatus.BAD_REQUEST);
		}
	}
	
	//get donor by id
	@GetMapping("/getDonor/{donor_id}")
	public Donor fetchDetailsById(@PathVariable Long donor_id) {
		return donorService.getDonorById(donor_id);
	}
	
	
	//get all donors
	@GetMapping("/all")
	public ResponseEntity<?> getAllDonors() {
		System.out.println("getAll");
		//return donorService.findAll();
		if(this.donorService.findAll().size()>0)
		{
			return new ResponseEntity<List<Donor>>(this.donorService.findAll(),HttpStatus.OK);
		}
		else
		{
		 return new ResponseEntity<String>("no donors found",HttpStatus.BAD_REQUEST);	
		}
	}
	
	//for update donor
	@PutMapping("/{donor_id}")
	public ResponseEntity<Donor> updateDonor(@PathVariable("donor_id") long donorId,@RequestBody Donor donor) throws ResourceNotFoundException
	{
		return new ResponseEntity<Donor>(this.donorService.updateDonor(donor, donorId),HttpStatus.OK);
	}
	
	//get donors through address and bloodGroup
	@GetMapping("se/{address}/{bloodGroup}")
	public ResponseEntity<List<Donor>> findByAddressAndBloodGroup(@PathVariable("address")String address, @PathVariable("bloodGroup")String bloodGroup){
		//return donorService.getDonorByAddressAndBloodGroup(donor);
		List<Donor> donor1=this.donorService.findByAddressAndBloodGroup(address, bloodGroup);
		if(donor1.isEmpty()) {
			return ResponseEntity.notFound().build();
		}else {
			return ResponseEntity.ok(donor1); 
		}
	}
////search donors by Address
//	@GetMapping("search/{address}")
//	public List<Donor> getDonorByAddress(@PathVariable String address)
//	{
//		return donorService.getDonorByAddress(address);
//	}
	
	
}
