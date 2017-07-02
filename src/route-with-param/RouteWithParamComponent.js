import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RouteWithParamComponent extends Component {
    render() {
        const { match } = this.props;
        return (
            <section>
                <div className="container has-text-centered">
                    <h1 className="title">This route has a param in the URL</h1>
                    <h2 className="subtitle">The value parameter is: {match.params.someText}</h2>
                </div>
            </section>
        );
    }
}

export default withRouter(RouteWithParamComponent);