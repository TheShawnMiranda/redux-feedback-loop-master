import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Home extends Component {
    begin = () => {
        this.props.history.push('/feeling');
    }

    render() {
        return (
                <div className="Home">
                    <button onClick={this.begin}>Begin</button>
                </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);