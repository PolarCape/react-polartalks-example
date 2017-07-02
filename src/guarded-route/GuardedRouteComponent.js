import React, { Component } from 'react';

class GuardedRouteComponent extends Component {
    render() {
        return (
            <section>
                <div className="container has-text-centered">
                    <h1 className="title">Guarded Route</h1>
                    <p>
                        This route has a simple guard implemented. To see the effects, inside <code>Guard.js</code> change the <code>this.state.redirect</code> to true
                    </p>
                </div>
            </section>
        );
    }
}

export default GuardedRouteComponent;