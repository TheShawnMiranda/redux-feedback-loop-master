import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';


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
                    <button>Submit</button>
                </div>
            </Router>
        )
    }
}

export default Results;