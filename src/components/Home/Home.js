import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Feeling from '../Feeling/Feeling';

class Home extends Component {
    render() {
        return (
            <Router>
                <div className="Home">
                    <Link to='/feeling'><button>Begin</button></Link>
                </div>
                <Route path='/feeling' component={Feeling} />
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);