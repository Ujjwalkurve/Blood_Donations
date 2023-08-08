package com.edubridge;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.edubridge.entity.Donor;
import com.edubridge.service.DonorService;
@SpringBootTest
class DonorTestCase {

	@Autowired
	private DonorService donorService;
 static	Donor donor =null;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		donor = new Donor();
		donor.setName("Rahul");
		donor.setEmail("rahul@gmail.com");
		donor.setPassword("Rahul@123");
		donor.setMobileNumber("9874561235");
		donor.setAddress("Bhopal");
		donor.setBloodGroup("O+");
		donor.setGender("Male");
		donor.setAge(46);
		donor.setWeight(55);
		donor.setState("MP");
		donor.setConfirmPassword("Rahul@123");
		
				
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}
@Disabled
	@Test
	void testRegisterDonor() {
		assertNotNull(donorService.save(donor));
	}
@Test
void testGetDonorById() {
	assertNotNull(donorService.getDonorById(1010));
	
}

}
