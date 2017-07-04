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
                    <div className="field">
                        <label className="label">Surname</label>
                        <p className="control">
                            <input name="name" className="input" type="text" placeholder="Doe" />
                        </p>
                    </div>
                    <div className="field is-grouped">
                        <p className="control">
                            <button className="button is-primary">Submit</button>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default SimpleRouteComponent;