package com.edubridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.entity.Receiver;
@Repository
public interface ReceiverRepository extends JpaRepository<Receiver, Long>{


	Receiver findByEmailAndPassword(String email, String password);

}
