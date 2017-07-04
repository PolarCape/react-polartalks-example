import React, { Component } from 'react';

class SimpleRouteComponent extends Component {
    render() {
        return (
            <section>
                <div className="form-wrapper container has-text-centered">
                    <div className="field">
                        <label className="label">Name</label>
                        <p className="control">
                            <input name="name" className="input" type="text" placeholder="John" />
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default SimpleRouteComponent;