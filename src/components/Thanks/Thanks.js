import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import '../App/App.css';

class Thanks extends Component {

    formReset = () => {
        this.props.reduxState.feedbackReducer = [];
        this.props.history.push('/');
    }

    render() {
        return (
            <Router>
                <div className="Thanks">
                    <h1>Thank you for your Feedback!</h1>
                    <button onClick={this.formReset}>Reset</button>
                </div>
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Thanks);