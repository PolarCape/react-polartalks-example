import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

function Guard() {
    return function Guard(WrappedComponent) {
        class GuardFactory extends Component {

            constructor(props) {
                super(props);

                this.state = {
                    redirect: false
                }
            }

            render() {
                console.log('FROM THE GUARD');

                if (this.state.redirect) return <Redirect to="/" />;

                return <WrappedComponent {...this.props} />;
            }
            
        }

        return withRouter(GuardFactory);
    }
}

export default Guard;