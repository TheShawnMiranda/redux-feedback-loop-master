import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import '../App/App.css';
import axios from 'axios';

class Results extends Component {

    postToDatabase = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: Number(this.props.reduxState.feedbackReducer[0].feeling),
                understanding: Number(this.props.reduxState.feedbackReducer[1].understanding),
                support: Number(this.props.reduxState.feedbackReducer[2].support),
                comments: this.props.reduxState.feedbackReducer[3].comments
            }
        }).then((response) => {
            console.log(response);
            this.props.history.push('/thanks');
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <Router>
                <div className="Support">
                    <h1>Is this okay?</h1>
                    <h3>Feelings: {this.props.reduxState.feedbackReducer[0].feeling}</h3>
                    <h3>Understanding: {this.props.reduxState.feedbackReducer[1].understanding}</h3>
                    <h3>Support: {this.props.reduxState.feedbackReducer[2].support}</h3>
                    <h3>Comments: {this.props.reduxState.feedbackReducer[3].comments}</h3>
                    <button onClick={this.postToDatabase}>Submit</button>
                </div>
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Results);