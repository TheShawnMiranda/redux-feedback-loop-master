import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Results from '../Results/Results';
import Thanks from '../Thanks/Thanks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/feeling' component={Feeling} />
        <Route path='/understanding' component={Understanding} />
        <Route path='/support' component={Support} />
        <Route path='/comments' component={Comments} />
        <Route path='/results' component={Results} />
        <Route path='/thanks' component={Thanks} />
      </Router>
    )
  }
}

export default App;