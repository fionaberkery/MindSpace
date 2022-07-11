package com.server.server.controllers;
import com.server.server.models.JournalEntry;
import com.server.server.models.User;
import com.server.server.repositories.JournalEntryRepository;
import com.server.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
public class JournalEntryController {

    @Autowired
    JournalEntryRepository journalEntryRepository;

    UserRepository userRepository;

    // see all journal entries
    @GetMapping(value = "/journals")
    public ResponseEntity<List<JournalEntry>> getAllJournalEntries() {
        return new ResponseEntity<>(journalEntryRepository.findAll(), HttpStatus.OK);
    }

    // create new journal entry
    @PostMapping(value = "/journal")
    public JournalEntry newEntry(@RequestBody JournalEntry newJournalEntry) {
        return journalEntryRepository.save(newJournalEntry);
    }

    // edit journal entry
    @PutMapping(value = "/journal")
    public JournalEntry journalEntryToEdit(@RequestBody JournalEntry journalEntryToEdit) {
        return journalEntryRepository.save(journalEntryToEdit);
    }

    // delete journal entry by id
    @DeleteMapping(value = "/journal/{id}")
    public ResponseEntity<String> deleteEntry(@PathVariable Long id) {
        try // try this first
        {
            journalEntryRepository.deleteById(id);
            return new ResponseEntity<String>("Journal Entry " + id + " Deleted", HttpStatus.OK);
        } catch (Exception e) // if the first doesn't work then do this
        {
            return new ResponseEntity<String>("Journal Entry Not Deleted - Server Error", HttpStatus.BAD_REQUEST);
        }
    }
}




