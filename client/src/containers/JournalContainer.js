import React, {useState} from 'react'
import JournalList from '../components/Journal/JournalList'

const JournalContainer = () => {

    const[journalEntries, setJournalEntries] = useState ([
        { date: "22-02-22", textInput: "This is the first journal entry"},
        { date: "23-02-22", textInput: "This is the second journal entry"},
        { date: "24-02-22", textInput: "This is the third journal entry"},
        { date: "25-02-22", textInput: "This is the fourth journal entry"},
        { date: "26-02-22", textInput: "This is the fifth journal entry"},
    ])
    const[newEntry, setNewEntry] = useState("")
    const[selectedJournalEntry, setSelectedJournalEntry] = useState(null)

    onJournalEntryClick = (selectedEntry) => {
        setSelectedJournalEntry(selectedEntry)
    }


    return (

        <>
            <h2> Journal </h2>

            <JournalList journalEntries={journalEntries} newEntry={newEntry} onJournalEntryClick={onJournalEntryClick} selectedJournalEntry={selectedJournalEntry} ></JournalList>


        </>
    )
}

export default JournalContainer