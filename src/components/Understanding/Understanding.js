import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Support from '../Support/Support';

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
        this.props.dispatch({
            type: 'SET_RESPONSE',
            payload: this.state
        })
    }

    render() {
        return (
            <Router>
                <div className="Understanding">
                    <h1>How well did you understand the day's material?</h1>
                    <input type='number' min='1' max='5'
                        placeholder='On a scale from 1 to 5'
                        onChange={(event) => this.inputValue('understanding', event)} />
                    <Link to='/support'><button onClick={this.submitter}>Next</button></Link>
                </div>
                <Route path='/support' component={Support} />
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);