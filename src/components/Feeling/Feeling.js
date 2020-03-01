import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Understanding from '../Understanding/Understanding';

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
        this.props.dispatch({
            type: 'SET_RESPONSE',
            payload: this.state
        })
    }

    render() {
        return (
            <Router>
                <div className="Feeling">
                    <h1>How are you feeling?</h1><br />
                    <input type='number' min='1' max='5'
                        placeholder='On a scale from 1 to 5'
                        onChange={(event) => this.inputValue('feeling', event)} />
                    <Link to='/understanding'><button onClick={this.submitter}>Next</button></Link>
                </div>
                <Route path='/understanding' component={Understanding} />
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feeling);