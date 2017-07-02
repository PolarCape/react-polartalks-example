import React, { Component } from 'react';

import DisplayFullNameComponent from '../display-full-name/DisplayFullNameComponent';

class LocalStateManagementComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'John',
            lastName: 'Doe',
            age: 26
        }
    }

    render() {
        let { firstName, lastName, age } = this.state;

        return (
            <section>
                <div className="container">
                    <h1 className="title">Local Variables</h1>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{age}</p>

                    <DisplayFullNameComponent firstName={firstName} lastName={lastName} />
                </div>
            </section>
        );
    }
}

export default LocalStateManagementComponent;