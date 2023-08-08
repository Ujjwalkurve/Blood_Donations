package com.edubridge.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.edubridge.entity.Donor;
import com.edubridge.entity.Receiver;
@Service
public interface ReceiverService {
	public Receiver save(Receiver receiver);
	
	Receiver updateReceiver (Receiver receiver, long receiverId);
	public List<Receiver> getAll();
	public Receiver findById(Long rid) ;
	public  Receiver login(Receiver receiver) ;
	List<Receiver> delete(long receiverId);
	public Receiver getReceiverById(Long receiver_id);
}
