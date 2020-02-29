import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';
import Comments from '../Comments/Comments';

class Support extends Component {
    render() {
        return (
            <Router>
                <div className="Support">
                    <h1>How supported do you feel?</h1>
                    <input type='number' min='1' max='5' placeholder='On a scale from 1 to 5'></input>
                    <Link to='/comments'><button>Next</button></Link>
                </div>
                <Route path='/comments' component={Comments} />
            </Router>
        )
    }
}

export default Support;