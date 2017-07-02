import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementNumber, decrementNumber, resetNumber } from '../actions/Counter';

class CounterComponent extends Component {

    render() {
        let { counter, dispatch } = this.props;

        return (
            <section>
                <div className="container has-text-centered">
                    <h1 className="title">Counter</h1>
                    <h2 className="subtitle">{counter}</h2>
                    <button onClick={_ => { dispatch(incrementNumber()) }} className="button">Increment</button>
                    <button onClick={_ => { dispatch(decrementNumber()) }} className="button">Decrement</button>
                    <button onClick={_ => { dispatch(resetNumber()) }} className="button is-danger">Reset</button>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps)(CounterComponent);