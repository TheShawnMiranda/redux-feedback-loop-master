import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';
import Thanks from '../Thanks/Thanks'

class Results extends Component {
    render() {
        return (
            <Router>
                <div className="Support">
                    <h1>Anything else you would like to add?</h1>
                    <h3>Feelings: </h3>
                    <h3>Understanding: </h3>
                    <h3>Support: </h3>
                    <h3>Comments: </h3>
                    <Link to='/thanks'><button>Submit</button></Link>
                </div>
                <Route path='/thanks' component={Thanks} />
            </Router>
        )
    }
}

export default Results;