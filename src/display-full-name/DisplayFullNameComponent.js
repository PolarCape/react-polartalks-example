import React, { Component } from 'react';

class DisplayFullNameComponent extends Component {
    render() {
        let { firstName, lastName } = this.props;
        
        return (
            <p>
               {`${firstName} ${lastName}`}
            </p>
        );
    }
}

export default DisplayFullNameComponent;