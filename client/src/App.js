import './App.css';
import './components/NavBar/navBar.css'
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import AudioPlayer from './containers/AudioPlayer';
import ColouringBookContainer from './containers/ColouringBookContainer';
import Breathe from './components/Breathe/Breathe';
import JournalContainer from './containers/JournalContainer';
import JournalList from './components/Journal/JournalList';
import UserProfileContainer from './containers/UserProfileContainer';
import NewEntry from './components/Journal/NewEntry';
import { JournalEntryService , PostJournalEntry, UserService } from './services/Services';
import ProfilePage from './components/UserProfile/ProfilePage';
import {Helmet} from 'react-helmet';

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
}, [])


  return (
    <>
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
          {/* home component */}
        </Route>

        <Route path="/breathe">
          <Breathe></Breathe>
        </Route>

        <Route path="/colour">
          <ColouringBookContainer />
        </Route>

        <Route path="/journal">
          <JournalContainer currentUserJournalEntries={currentUserJournalEntries} setCurrentUserJournalEntries={setCurrentUserJournalEntries} savedUsers={savedUsers} savedJournalEntries={savedJournalEntries} ></JournalContainer>
        </Route>

        <Route path="/listen">
          <AudioPlayer/>
        </Route>

        <Route path="/game">
npm           {/* sounds component */}
        </Route>

        <Route path="/journalEntries">
          <JournalList 
          setCurrentUserJournalEntries={setCurrentUserJournalEntries} 
          currentUserJournalEntries={currentUserJournalEntries} 
          savedUsers={savedUsers} 
          savedJournalEntries={savedJournalEntries}/>
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

    </>
  );
}

export default App;
