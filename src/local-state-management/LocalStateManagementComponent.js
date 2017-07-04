import React, { Component } from 'react';

import DisplayFullNameComponent from '../display-full-name/DisplayFullNameComponent';

class LocalStateManagementComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'John',
            lastName: 'Doe',
            age: 26
        };

        this.changeFirstName = this.changeFirstName.bind(this);
    }

    changeFirstName() {
        this.setState({ firstName: 'Jane' });
    }

    render() {
        let { firstName, lastName, age } = this.state;

        return (
            <section>
                <div className="container has-text-centered">
                    <h1 className="title">Local Variables</h1>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{age}</p>

                    <DisplayFullNameComponent firstName={firstName} lastName={lastName} />

                    <button onClick={this.changeFirstName} className="button">Update first name</button>
                </div>
            </section>
        );
    }
}

export default LocalStateManagementComponent;