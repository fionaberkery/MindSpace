package com.server.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

   @Column(name = "name")
    private String name;

   @Column(name = "email")
    private String email;

   @OneToMany(mappedBy = "user")
   @JsonIgnoreProperties({"user"})
   private List<JournalEntry> journalEntries;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
        this.journalEntries = new ArrayList<>();
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<JournalEntry> getJournalEntries() {
        return journalEntries;
    }

    public void setJournalEntries(List<JournalEntry> journalEntries) {
        this.journalEntries = journalEntries;
    }

//    public void addJournalEntry(JournalEntry newEntry) {
//        this.journalEntries.add(newEntry);
//    }
//
//    public int getLengthOfJournalList() {
//       return this.journalEntries.size();
//    }
}
