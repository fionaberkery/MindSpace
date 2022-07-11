package com.server.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.type.descriptor.sql.VarcharTypeDescriptor;

import javax.persistence.*;

@Entity
@Table(name = "journalEntries")
public class JournalEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "textInput", length=10000)
    private String textInput;

    @ManyToOne(optional = false)
    @JsonIgnoreProperties({"journalEntries"})
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public JournalEntry(String date, String textInput, User user) {
        this.date = date;
        this.textInput = textInput;
        this.user = user;
    }

    public JournalEntry() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTextInput() {
        return textInput;
    }

    public void setTextInput(String textInput) {
        this.textInput = textInput;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
