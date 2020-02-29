import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';
import Support from '../Support/Support';

class Understanding extends Component {
    render() {
        return (
            <Router>
                <div className="Understanding">
                    <h1>How well did you understand the day's material?</h1>
                    <input type='number' min='1' max='5' placeholder='On a scale from 1 to 5'></input>
                    <Link to='/support'><button>Next</button></Link>
                </div>
                <Route path='/support' component={Support} />
            </Router>
        )
    }
}

export default Understanding;