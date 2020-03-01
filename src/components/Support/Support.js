import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Comments from '../Comments/Comments';

class Support extends Component {

    state = {
        support: 0
    }

    inputValue = (propertyName, event) => {
        this.setState ({
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
                <div className="Support">
                    <h1>How supported do you feel?</h1>
                    <input type='number' min='1' max='5'
                        placeholder='On a scale from 1 to 5'
                        onChange={(event) => this.inputValue('support', event)} />
                    <Link to='/comments'><button onClick={this.submitter}>Next</button></Link>
                </div>
                <Route path='/comments' component={Comments} />
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Support);