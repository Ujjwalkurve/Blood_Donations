package com.edubridge.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.edubridge.entity.Donor;
import com.edubridge.exception.ResourceNotFoundException;
@Service
public interface DonorService {
	public Donor save(Donor donor) ;
    
    //Donor updateDonor (Donor donor, int donorId);
	public List<Donor> findAll();
	public Donor findById(Long donorId) ;
	public  Donor login(Donor donor) ;
	//public List<Donor> getDonorByAddressAndBlood_group(String Address,String blood_group,Donor donor);
	List<Donor> delete(long donorId);

	Donor updateDonor(Donor donor, long donorId) throws ResourceNotFoundException;

		List<Donor> findByAddressAndBloodGroup(Donor donor);
		
		List<Donor> getDonorByAddress (String address);
		

		public List<Donor> findByAddressAndBloodGroup(String address, String bloodGroup);
		
		public Donor getDonorById(Long donor_id);

	
}
