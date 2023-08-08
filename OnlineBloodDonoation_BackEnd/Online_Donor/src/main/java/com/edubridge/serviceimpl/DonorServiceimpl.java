package com.edubridge.serviceimpl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.entity.Donor;

import com.edubridge.exception.ResourceNotFoundException;
import com.edubridge.repository.DonorRepository;
import com.edubridge.service.DonorService;
@Service
public class DonorServiceimpl implements DonorService{
	@Autowired
	public DonorRepository donorRepository;

	@Override
	public Donor save(Donor donor) {
		// TODO Auto-generated method stub
		
		if(donor.getPassword().equals(donor.getConfirmPassword())) {
			// TODO Auto-generated method stub
			return donorRepository.save(donor);
			}else {
				return null;
			} 
	}

	@Override
	public List<Donor> delete(long donorId) {
		// TODO Auto-generated method stub
		Donor ex=this.donorRepository.findById(donorId).orElseThrow(()->new ResourceNotFoundException("donor id not found"));
		this.donorRepository.deleteById(ex.getDonor_id());
		return donorRepository.findAll();
		
	}

	@Override
	public List<Donor> findAll() {
		// TODO Auto-generated method stub
		return donorRepository.findAll();
	}

	@Override
	public Donor findById(Long donorId) {
		// TODO Auto-generated method stub
		return this.donorRepository.findById(donorId).orElseThrow(()->new ResourceNotFoundException("donor id not found"));
	}

	@Override
	public Donor login(Donor donor) {
		// TODO Auto-generated method stub
		return donorRepository.findByEmailAndPassword(donor.getEmail(),donor.getPassword());
		
	}

	
	@Override
	public Donor updateDonor(Donor donor, long donorId)throws ResourceNotFoundException {
		Donor existing=this.donorRepository.findById(donorId).orElseThrow(()->new ResourceNotFoundException("Donor id not found"));
			 existing.setName( donor.getName());
			 existing.setEmail( donor.getEmail());
			 existing.setAddress(donor.getAddress());		 
			 existing.setMobileNumber(donor.getMobileNumber());
			 existing.setPassword(donor.getPassword());
			 existing.setAge(donor.getAge());
			 existing.setBloodGroup(donor.getBloodGroup());
			 existing.setGender(donor.getGender());
			 existing.setWeight(donor.getWeight());
			 existing.setConfirmPassword(donor.getConfirmPassword());
			
			 if(donor.getPassword().equals(donor.getConfirmPassword())) {
					// TODO Auto-generated method stub
				 return this. donorRepository.save(existing);
					}else {
						return null;
					} 
					
				
		}
	@Override
	public List<Donor> findByAddressAndBloodGroup(Donor donor) {
		// TODO Auto-generated method stub
		return donorRepository.findByAddressAndBloodGroup(donor.getAddress(),donor.getBloodGroup());
	}

	@Override
	public List<Donor> getDonorByAddress(String address) {
		// TODO Auto-generated method stub
		return donorRepository.getDonorByAddress(address);
	}

	@Override
	public List<Donor> findByAddressAndBloodGroup(String address, String bloodGroup) {
		// TODO Auto-generated method stub
		return donorRepository.findByAddressAndBloodGroup(address, bloodGroup);

	}

	@Override
	public Donor getDonorById(Long donor_id) {
		// TODO Auto-generated method stub
		return donorRepository.findById(donor_id).orElse(null);
	}

//	@Override
//	public Donor getDonorById(Long donorId) {
//		// TODO Auto-generated method stub
//		return donorRepository.findById(donorId).orElse(null);
//	}
//	
}

