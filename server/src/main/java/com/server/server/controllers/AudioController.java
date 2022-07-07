package com.server.server.controllers;

import com.server.server.models.Audio;
import com.server.server.models.JournalEntry;
import com.server.server.repositories.AudioRepository;
import com.server.server.repositories.JournalEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin

public class AudioController {

        @Autowired
        AudioRepository audioRepository;

        // see all audios
        @GetMapping(value = "/audio")
        public ResponseEntity<List<Audio>> getAllAudios(){
            return new ResponseEntity<>(audioRepository.findAll(), HttpStatus.OK);
        }

        // get audio by id
        @GetMapping(value = "/audio/{id}")
        public ResponseEntity getAudio(@PathVariable Long id){
            return new ResponseEntity<>(audioRepository.findById(id), HttpStatus.OK);
        }

//        // create audio entry
//        @PostMapping(value = "/audio")
//        public ResponseEntity<Audio> postAudio(@RequestBody Audio audio){
//            audioRepository.save(audio);
//            return new ResponseEntity<>(audio, HttpStatus.CREATED);
//        }

}
