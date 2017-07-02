import React, { Component } from 'react';
import picture from './react-lifecycle.png';

class ChapterDetailsComponent extends Component {

    
    componentWillMount() {
        console.log('COMPONENT WILL MOUNT');
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
    }
    
    
    render() {
        console.log('RENDER');
        return (
            <section>
                <div className="container has-text-centered">
                    <h1 className="title">Lifecycle and Rendering Component</h1>
                    <img src={picture} alt="Lifecycle Diagram"/>
                </div>
            </section>
        );
    }
}

export default ChapterDetailsComponent;