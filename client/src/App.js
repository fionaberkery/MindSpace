
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import ColouringBookContainer from './containers/ColouringBookContainer';

import Breathe from './components/Breathe/Breathe';
import BubbleGame from './components/BubbleGame/BubbleGame';
// import Sudoku from './components/SudokuGame/Game';



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
          {/* journal component */}
        </Route>

        <Route path="/listen">
          {/* sounds component */}
        </Route>

        <Route path="/game">
          <BubbleGame />
          {/* sounds component */}
        </Route>

      </Switch>
      </Router>

    </>
  );
}

export default App;
