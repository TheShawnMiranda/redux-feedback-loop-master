import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router} from 'react-router-dom';
import '../App/App.css';

class Home extends Component {
    begin = () => {
        this.props.history.push('/feeling');
    }

    render() {
        return (
            <Router>
                <div className="Home">
                    <button onClick={this.begin}>Begin</button>
                </div>
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);