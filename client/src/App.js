
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home/Home';


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
          {/* breathing component */}
        </Route>

        <Route path="/colour">
          {/* colouring component */}
        </Route>

        <Route path="/journal">
          {/* journal component */}
        </Route>

        <Route path="/listen">
          {/* sounds component */}
        </Route>

      </Switch>
      </Router>

    </>
  );
}

export default App;
