package com.server.server.controllers;
import com.server.server.models.JournalEntry;
import com.server.server.models.User;
import com.server.server.repositories.JournalEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JournalEntryController {

    @Autowired
    JournalEntryRepository journalEntryRepository;

    // see all journal entries
    @GetMapping(value = "/journals")
    public ResponseEntity<List<JournalEntry>> getAllJournalEntries(){
        return new ResponseEntity<>(journalEntryRepository.findAll(), HttpStatus.OK);
    }

    // get journal entry by id
    @GetMapping(value = "/journals/{id}")
    public ResponseEntity getJournalEntry(@PathVariable Long id){
        return new ResponseEntity<>(journalEntryRepository.findById(id), HttpStatus.OK);
    }

    // create new journal entry
    @PostMapping(value = "/journal")
    public ResponseEntity<JournalEntry> postJournalEntry(@RequestBody JournalEntry journalEntry){
        journalEntryRepository.save(journalEntry);
        return new ResponseEntity<>(journalEntry, HttpStatus.CREATED);
    }

    // edit journal entry
    @PutMapping(value = "/journal")
    public JournalEntry journalEntryToEdit(@RequestBody JournalEntry journalEntryToEdit){
        return journalEntryRepository.save(journalEntryToEdit);
    }

    // delete journal entry by id
    @DeleteMapping(value = "/journals/{id}")
    public ResponseEntity deleteJournalEntry(@PathVariable Long id){
        try // try this first
        {
            journalEntryRepository.deleteById(id);
            return new ResponseEntity<>("Journal Entry " + id + " Deleted", HttpStatus.OK);
        }
        catch(Exception e) // if the first doesn't work then do this
        {
            return new ResponseEntity<>("Journal Entry Not Deleted - Server Error", HttpStatus.BAD_REQUEST);
        }
    }

//    // find all journal entries by user id
//    @GetMapping(value = "/journals/user")
//    public ResponseEntity<List<JournalEntry>> findEntriesByUserId(
//            @RequestParam(name = "userid") Long id)
//    {
//        return new ResponseEntity<>(journalEntryRepository.findByUser_Id(id), HttpStatus.OK);
//    }

    // find all journal entries by user name
    @GetMapping(value = "/journals/user")
    public ResponseEntity<List<JournalEntry>> findEntriesByUserName(
            @RequestParam(name = "name") String name)
    {
        return new ResponseEntity<>(journalEntryRepository.findByUser_Name(name), HttpStatus.OK);
    }

}
