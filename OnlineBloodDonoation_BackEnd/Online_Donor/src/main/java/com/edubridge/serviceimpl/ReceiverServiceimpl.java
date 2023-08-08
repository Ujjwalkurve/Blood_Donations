package com.edubridge.serviceimpl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.edubridge.entity.Donor;
import com.edubridge.entity.Receiver;
import com.edubridge.exception.ResourceNotFoundException;
import com.edubridge.repository.ReceiverRepository;
import com.edubridge.service.ReceiverService;
@Service
public class ReceiverServiceimpl implements ReceiverService {
@Autowired
public ReceiverRepository receiverRepository;
	@Override
	public Receiver save(Receiver receiver) {
		// TODO Auto-generated method stub
		if(receiver.getPassword().equals(receiver.getConfirmPassword())) {
			// TODO Auto-generated method stub
			return receiverRepository.save(receiver);
			}else {
				return null;
			} 
		
	}

	
	@Override
	public List<Receiver> delete(long receiverId) {
		// TODO Auto-generated method stub
		System.out.println("inside");
		Receiver ex=this.receiverRepository.findById(receiverId).orElseThrow(()->new ResourceNotFoundException("receiver id not found"));
		this.receiverRepository.deleteById(ex.getReceiver_id());
		return receiverRepository.findAll();
		
	}

	@Override
	public Receiver updateReceiver(Receiver receiver, long receiverId) {
		// TODO Auto-generated method stub
		Receiver existing=this.receiverRepository.findById(receiverId).orElseThrow(()->new ResourceNotFoundException("Receiver id not found"));
		 existing.setName( receiver.getName());
		 existing.setEmail( receiver.getEmail());
		 existing.setAddress(receiver.getAddress());		 
		 existing.setMobileNumber(receiver.getMobileNumber());
		 existing.setPassword(receiver.getPassword());
		 existing.setAge(receiver.getAge());
		existing.setConfirmPassword(receiver.getConfirmPassword());
		 existing.setGender(receiver.getGender());
		
		 if(receiver.getPassword().equals(receiver.getConfirmPassword())) {
				// TODO Auto-generated method stub
			 return this. receiverRepository.save(existing);
				}else {
					return null;
				} 
			
		
				
			
	}

	@Override
	public List<Receiver> getAll() {
		// TODO Auto-generated method stub
		return receiverRepository.findAll();
	}

	@Override
	public Receiver findById(Long rid) {
		// TODO Auto-generated method stub
		return receiverRepository.findById(rid).orElseThrow(()->new ResourceNotFoundException("donor id not found"));
	}

	@Override
	public Receiver login(Receiver receiver) {
		// TODO Auto-generated method stub
		return receiverRepository.findByEmailAndPassword(receiver.getEmail(),receiver.getPassword());
		
	}


	@Override
	public Receiver getReceiverById(Long receiver_id) {
		// TODO Auto-generated method stub
		return receiverRepository.findById(receiver_id).orElse(null);
	}

}



