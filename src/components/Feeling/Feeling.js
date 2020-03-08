import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Feeling extends Component {

    state = {
        feeling: 0
    }

    inputValue = (propertyName, event) => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    submitter = () => {
        if (this.state.feeling === 0) {
            alert("Please input a number between 1 and 5!");
        } else {
            this.props.dispatch({
                type: 'SET_RESPONSE',
                payload: this.state
            })
            this.props.history.push('/understanding');
        }
    }

    render() {
        return (
                <div className="Feeling">
                    <h1>How are you feeling?</h1><br />
                    <input type='number' min='1' max='5'
                        placeholder='On a scale from 1 to 5'
                        onChange={(event) => this.inputValue('feeling', event)} />
                    <button onClick={this.submitter}>Next</button>
                </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feeling);