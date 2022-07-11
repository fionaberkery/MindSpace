import './App.css';
import './components/NavBar/navBar.css'
import './containers/journalLogin.css'

import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
// import AudioPlayer from './containers/AudioPlayer';
import ColouringBookContainer from './containers/ColouringBookContainer';
import Breathe from './components/Breathe/Breathe';
import UserProfileContainer from './containers/UserProfileContainer';
import NewEntry from './components/UserJournal/NewEntry';
import { JournalEntryService , PostJournalEntry, PostNewUser, UserService } from './services/Services';
import ProfilePage from './components/UserJournal/ProfilePage';
import NewProfile from './components/UserJournal/NewProfile';
import Home from './containers/Home';
import {Helmet} from 'react-helmet';
import JournalList from './components/Journal/JournalList.js'
import WalkingGameContainer from './containers/WalkingGameContainer'
import Games from './components/Games/Games';
import Jigsaw from './components/Games/jigsaw/Jigsaw';
import BubbleGame from './components/Games/BubbleGame/BubbleGame.js'
// Audio imports
import { AudioService } from "./services/Services";
import AudioList from '../src/components/audio_player_components/AudioList';
import AudioControls from "../src/components/audio_player_components/AudioControls";


function App() {

  const [savedUsers, setSavedUsers] = useState([])
  const [savedJournalEntries, setSavedJournalEntries] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserJournalEntries, setCurrentUserJournalEntries] = useState([])
  // Audio state
  const [audioData, setAudioData] = useState([])
  const [selected, setSelected] = useState(null)
  // Audio controls state
  const [audioIndex, setAudioIndex] = useState(0)

  useEffect(() => {
    UserService.getUsers()
    .then(users => setSavedUsers(users))
    JournalEntryService.getJournalEntries()
    .then(journalEntries => setSavedJournalEntries(journalEntries))
  }, [])

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

// >> Audio player code start <<

  useEffect(() => {
      AudioService.getAudios()
      .then(audioData => setAudioData(audioData))
  }, [])

  const onAudioClick = (audio) => {
      setSelected(audio)
  }

// Audio Controls <<<<<<<<<<<<<<<<<<<<<<<<

// const onNextClick = (selected) => {
//     setSelected(selected)
// }

// if (!active) return null

  useEffect(() => {
    if(selected !== null){
    const audioObjects = audioData.map(audio => audio.id)
    setAudioIndex(audioObjects.indexOf(selected.id))
  }})
  console.log(audioIndex, " << this is selected audioIndex in audioData")


  const onNextClick = () => {
    if(selected !== null){
      if (audioIndex < audioData.length - 1) {
          setAudioIndex(audioIndex + 1)
          setSelected(audioData.at(audioIndex + 1))
      } else {
          setAudioIndex(0)
          setSelected(audioData.at(0))
      }
    }
  }

  const onPreviousClick = () => {
    if(selected !== null){
      if (audioIndex - 1 < 0) {
          setAudioIndex(audioData.length - 1)
          setSelected(audioData.at(audioIndex.length - 1))
      } else {
          setAudioIndex(audioIndex - 1)
          setSelected(audioData.at(audioIndex - 1))
      }
    }
  }


// >> End audio player code <<

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
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

        {/* <AudioPlayer active={true}/> */} 
        <div>
            <AudioList audioData={audioData} 
            onAudioClick={onAudioClick}/>
        </div>
        <div>
            { selected ? <AudioControls 
            selected = {selected}
            audioIndex = {audioIndex}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            />: null }
        </div>


        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
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
          {/* 
          <Route path="/listen">
          </Route> */}

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
  )
}

export default App

// savedUsers, savedJournalEntries
