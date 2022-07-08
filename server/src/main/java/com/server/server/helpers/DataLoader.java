package com.server.server.helpers;

import com.server.server.models.JournalEntry;
import com.server.server.models.User;
import com.server.server.repositories.JournalEntryRepository;
import com.server.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;


//@Component // comment this out if you don't want dataloader to run with server run
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    JournalEntryRepository journalEntryRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        User user1 = new User("Emma", "emma@email.com");
        userRepository.save(user1);

        User user2 = new User("Liam", "liam@mail.com");
        userRepository.save(user2);

        User user3 = new User("Victoria","vic@mail.com");
        userRepository.save(user3);

        User user4 = new User("Louis", "louis@mail.com");
        userRepository.save(user4);

        User user5 = new User("Mel", "melb@mail.com");
        userRepository.save(user5);

        User user6 = new User("Niall", "niall@mail.com");
        userRepository.save(user6);

        User user7 = new User("Melanie", "melc@mail.com");
        userRepository.save(user7);

        User user8 = new User("Zayn", "zayn@mail.com");
        userRepository.save(user8);

        User user9 = new User("Geri", "geri@mail.com");
        userRepository.save(user9);

        User user10 = new User("Harry", "harry@mail.com");
        userRepository.save(user10);

        JournalEntry entry1 = new JournalEntry("22-03-22", "feeling down", user1);
        journalEntryRepository.save(entry1);

        JournalEntry entry2 = new JournalEntry("14-04-22", "feeling ok", user2);
        journalEntryRepository.save(entry2);

        JournalEntry entry3 = new JournalEntry("01-12-21", "feeling unsure", user3);
        journalEntryRepository.save(entry3);

        JournalEntry entry4 = new JournalEntry("25-01-22", "feeling better", user4);
        journalEntryRepository.save(entry4);

        JournalEntry entry5 = new JournalEntry("07-11-21", "feeling panicked", user5);
        journalEntryRepository.save(entry5);

        JournalEntry entry6 = new JournalEntry("12-01-22", "feeling anxious", user6);
        journalEntryRepository.save(entry6);

        JournalEntry entry7 = new JournalEntry("30-11-21", "feeling on edge", user7);
        journalEntryRepository.save(entry7);

        JournalEntry entry8 = new JournalEntry("03-03-22", "feeling scared", user8);
        journalEntryRepository.save(entry8);

        JournalEntry entry9 = new JournalEntry("17-11-21", "feeling tired", user9);
        journalEntryRepository.save(entry9);

        JournalEntry entry10 = new JournalEntry("11-12-21", "feeling unsure", user10);
        journalEntryRepository.save(entry10);




    }
}
