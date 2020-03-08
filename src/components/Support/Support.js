import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Support extends Component {

    state = {
        support: 0
    }

    inputValue = (propertyName, event) => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    submitter = () => {
        if (this.state.support === 0) {
            alert("Please input a number between 1 and 5!");
        } else {
            this.props.dispatch({
                type: 'SET_RESPONSE',
                payload: this.state
            })
            this.props.history.push('/comments');
        }
    }

    render() {
        return (
                <div className="Support">
                    <h1>How supported do you feel?</h1>
                    <input type='number' min='1' max='5'
                        placeholder='On a scale from 1 to 5'
                        onChange={(event) => this.inputValue('support', event)} />
                    <button onClick={this.submitter}>Next</button>
                </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Support);