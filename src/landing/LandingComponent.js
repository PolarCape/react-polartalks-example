import React, { Component } from 'react';
import logo from '../logo.svg';

import ChapterDetailsComponent from '../chapter-details/ChapterDetailsComponent';

class LandingComponent extends Component {
    render() {
        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                PolarTalks
                            </h1>
                            <h2 className="subtitle">
                                Angular vs React
                            </h2>
                            <img width="150" src={logo} />
                        </div>
                    </div>
                </section>

                <ChapterDetailsComponent />
            </div>
        );
    }
}

export default LandingComponent;