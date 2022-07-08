package com.server.server.repositories;
import com.server.server.models.JournalEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JournalEntryRepository extends JpaRepository<JournalEntry, Long> {

    @Query("select j from JournalEntry j where j.user.id = ?1")
    List<JournalEntry> findByUser_Id(Long id);

    List<JournalEntry> findByUser_Name(String name);


}
