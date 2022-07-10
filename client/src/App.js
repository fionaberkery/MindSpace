import './App.css';
import './components/NavBar/navBar.css'
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import AudioPlayer from './containers/AudioPlayer';
import ColouringBookContainer from './containers/ColouringBookContainer';
import Breathe from './components/Breathe/Breathe';
import UserProfileContainer from './containers/UserProfileContainer';
import NewEntry from './components/UserJournal/NewEntry';
import { JournalEntryService , PostJournalEntry, PostNewUser, UserService } from './services/Services';
import ProfilePage from './components/UserJournal/ProfilePage';
import NewProfile from './components/UserJournal/NewProfile';


function App() {

  const [savedUsers, setSavedUsers] = useState([])
  const [savedJournalEntries, setSavedJournalEntries] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserJournalEntries, setCurrentUserJournalEntries] = useState([])

  useEffect(() => {
    UserService.getUsers()
    .then(users => setSavedUsers(users))
    JournalEntryService.getJournalEntries()
    .then(journalEntries => setSavedJournalEntries(journalEntries))
  }, [savedUsers, savedJournalEntries])

  const addNewUser = (newUser) => {
    PostNewUser(newUser)
    .then(profile => {
      const newUsersList = [...savedUsers, profile]
      setSavedUsers(newUsersList)
    })
  }

  const addNewJournalEntry = (newEntry) => {
    PostJournalEntry(newEntry)
    .then(entry => {
      const newJournalEntriesList = [...savedJournalEntries, entry]
      setSavedJournalEntries(newJournalEntriesList)
    })
  }

  // const deleteUserJournalEntry = (entryId) => {
  //   DeleteJournalEntry(entryId)
  // }

  const onUserSelected = function(user){
    setCurrentUser(user)
    setCurrentUserJournalEntries(user.journalEntries)
}

  return (

    <>
    
      <Router>
        
        <NavBar/>
        
        <Switch> 

          <Route exact path="/">
            {/* home component */}
          </Route>

          <Route path="/breathe">
            <Breathe/>
          </Route>

          <Route path="/colour">
            <ColouringBookContainer/>
          </Route>

          <Route path="/listen">
            <AudioPlayer/>
          </Route>

          <Route path="/game">
            {/* sounds component */}
          </Route>

          <Route path="/create">
            <NewEntry 
            addNewJournalEntry={addNewJournalEntry}
            currentUser={currentUser} />
          </Route>

          <Route path="/journal">
            <UserProfileContainer  
            onUserSelected={onUserSelected}
            savedUsers={savedUsers} />
          </Route>

          <Route path="/profile">
            <ProfilePage 
            
            currentUserJournalEntries={currentUserJournalEntries} 
            currentUser={currentUser} />
          </Route>

          <Route path="/newprofile">
            <NewProfile 
            onUserSelected={onUserSelected}
            addNewUser={addNewUser} />
          </Route>

      </Switch>

      </Router>

    </>
  )
}

export default App
