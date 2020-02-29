import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';
import Understanding from '../Understanding/Understanding';


class Feeling extends Component {
    render() {
        return (
            <Router>
                <div className="Feeling">
                    <h1>How are you feeling?</h1><br />
                    <input type='number' min='1' max='5' placeholder='On a scale from 1 to 5'></input>
                    <Link to='/understanding'><button>Next</button></Link>
                </div>
                <Route path='/understanding' component={Understanding} />
            </Router>
        )
    }
}

export default Feeling;