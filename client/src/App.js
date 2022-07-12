import './App.css';
import './components/NavBar/navBar.css'
import './containers/journalLogin.css'

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
import Home from './containers/Home';
import {Helmet} from 'react-helmet';
import WalkingGameContainer from './containers/WalkingGameContainer'
import Games from './components/Games/Games';
import Jigsaw from './components/Games/jigsaw/Jigsaw';
import BubbleGame from './components/BubbleGame/BubbleGame.js'
import Footer from './components/footer/Footer';

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
  }, [savedUsers, currentUserJournalEntries])

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
      setCurrentUserJournalEntries(newJournalEntriesList)
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
    <div id="page-content">
    <div id="page-content-wrap">

      <Helmet>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <title>Wellbeing First Aid Kit</title>
      </Helmet>
    
      <Router>
        
        <NavBar/>
        
        <Switch> 

          <Route exact path="/">
            <Home/>
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

          <Route path="/play">
            <Games></Games>
          </Route>

          <Route path="/jigsaw">
            <Jigsaw/>
          </Route>

          <Route path="/bubbles">
            <BubbleGame/>
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

        <Route path="WalkGame">
          <WalkingGameContainer/>
        </Route>

        <Route path="/create">
          <NewEntry></NewEntry>
        </Route>

        <Route path="/login">
          <UserProfileContainer setCurrentUserJournalEntries={setCurrentUserJournalEntries} currentUser={currentUser} savedUsers={savedUsers} setCurrentUser={setCurrentUser} />
        </Route>

        <Route path="/profile">
          <ProfilePage/>
        </Route>

        

      </Switch>

      </Router>

      </div>
      <Footer/>
      </div>
    

    </>
  )
}

export default App


