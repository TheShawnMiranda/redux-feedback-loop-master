import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Results from '../Results/Results';

class Comments extends Component {

    state = {
        comments: ''
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
                <div className="Comments">
                    <h1>Anything else you would like to add?</h1>
                    <input type='text' placeholder='Comments..?'
                        onChange={(event) => this.inputValue('comments', event)} />
                    <Link to='/results'><button onClick={this.submitter}>Next</button></Link>
                </div>
                <Route path='/results' component={Results} />
            </Router>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comments);