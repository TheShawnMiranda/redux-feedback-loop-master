import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';
import Feeling from '../Feeling/Feeling';

class Home extends Component {
    render() {
        return (
            <Router>
                <div className="Home">
                    {/* 'this button inside a link mounts the feeling component' */}
                    <Link to='/feeling'><button>Begin</button></Link>
                </div>
                <Route path='/feeling' component={Feeling} />
            </Router>
        )
    }
}

export default Home;