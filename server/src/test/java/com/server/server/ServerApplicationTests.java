//package com.server.server;
//
//import com.server.server.models.JournalEntry;
//import com.server.server.models.User;
//import com.server.server.repositories.JournalEntryRepository;
//import com.server.server.repositories.UserRepository;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import javax.jws.soap.SOAPBinding;
//
//import static org.junit.Assert.assertEquals;
//
//@RunWith(SpringRunner.class)
//@ActiveProfiles("test") // indicates it's a test profile so will not run Dataloader
//@SpringBootTest
//class ServerApplicationTests {
//
//	@Test
//	void contextLoads() {
//	}
//
//	@Autowired
//	UserRepository userRepository;
//
//	@Autowired
//	JournalEntryRepository journalEntryRepository;
//
//	@Test
//	public void canCreateAndSaveANewUser(){
//		User bob = new User("Bob", "bob@mail.com");
//		userRepository.save(bob);
//	}
//
//	@Test
//	public void	canCreateAndSaveAJournalEntry(){
//		User tim = new User("Tim", "tim@mail.com");
//		userRepository.save(tim);
//		JournalEntry entry1 = new JournalEntry("22-04-21", "This is Tim's first entry", tim);
//		journalEntryRepository.save(entry1);
//	}
//
//
//
//}
