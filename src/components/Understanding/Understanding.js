import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Understanding extends Component {

    state = {
        understanding: 0
    }

    inputValue = (propertyName, event) => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    submitter = () => {
        if (this.state.understanding === 0) {
            alert("Please input a number between 1 and 5!");
        } else {
            this.props.dispatch({
                type: 'SET_RESPONSE',
                payload: this.state
            })
            this.props.history.push('/support');
        }
    }

    render() {
        return (
                <div className="Understanding">
                    <h1>How well did you understand the day's material?</h1>
                    <input type='number' min='1' max='5'
                        placeholder='On a scale from 1 to 5'
                        onChange={(event) => this.inputValue('understanding', event)} />
                    <button onClick={this.submitter}>Next</button>
                </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);