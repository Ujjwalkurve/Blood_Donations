package com.edubridge.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.edubridge.entity.Donor;
@Repository
public interface DonorRepository extends JpaRepository<Donor, Long>{

	Donor findByEmailAndPassword(String email, String password);

	List<Donor> findByAddressAndBloodGroup(String address, String bloodGroup);

	@Query(value="select * from donortable where address like ?1",nativeQuery=true)
	//List<Donor> getDonorByaddress(String address);

	List<Donor> getDonorByAddress(String address);
	
	Optional<Donor> findById(Long donorId);
	
	
}
