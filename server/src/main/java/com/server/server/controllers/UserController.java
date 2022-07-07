package com.server.server.controllers;

import com.server.server.models.JournalEntry;
import com.server.server.models.User;
import com.server.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    // get all users
    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    // get user by id
    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    // create new user
    @PostMapping(value = "/users")
    public User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    // edit user
    @PutMapping(value = "/editUser")
    public User userToEdit(@RequestBody User userToEdit){
        return userRepository.save(userToEdit);
    }

    // delete user by id
    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id){
        try // try this first
        {
            userRepository.deleteById(id);
            return new ResponseEntity<>("User " + id + " Deleted", HttpStatus.OK);
        }
        catch(Exception e) // if the first doesn't work then do this
        {
            return new ResponseEntity<>("ooopppsss", HttpStatus.BAD_REQUEST);
        }
    }

}
