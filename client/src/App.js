
import './App.css';
import './components/NavBar/navBar.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ColouringBookContainer from './containers/ColouringBookContainer';
import Breathe from './components/Breathe/Breathe';
import JournalContainer from './containers/JournalContainer';


function App() {
  return (

    <>
      
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
          <JournalContainer></JournalContainer>
        </Route>

        <Route path="/listen">
          {/* sounds component */}
        </Route>

        <Route path="/game">
npm           {/* sounds component */}
        </Route>

      </Switch>
      </Router>

    </>
  );
}

export default App;
