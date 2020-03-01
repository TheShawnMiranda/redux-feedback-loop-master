import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import '../App/App.css';

class Thanks extends Component {
    render() {
        return (
            <Router>
                <div className="Thanks">
                    <h1>Thank you for your Feedback!</h1>
                </div>
            </Router>
        )
    }
}

export default Thanks;