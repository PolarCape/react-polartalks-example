import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsComponent extends Component {
    render() {
        let { counter } = this.props;

        return (
            <section>
                <div className="container has-text-centered">
                    <h1 className="title">Results</h1>
                    <h2 className="subtitle">The counter is: { counter }</h2>
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

export default connect(mapStateToProps)(ResultsComponent);