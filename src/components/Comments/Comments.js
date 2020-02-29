import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';
import Results from '../Results/Results';

class Comments extends Component {
    render() {
        return (
            <Router>
                <div className="Comments">
                    <h1>Anything else you would like to add?</h1>
                    <input type='text' placeholder='Comments'></input>
                    <Link to='/results'><button>Next</button></Link>
                </div>
                <Route path='/results' component={Results} />
            </Router>
        )
    }
}

export default Comments;