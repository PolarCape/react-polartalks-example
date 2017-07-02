import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationComponent extends Component {
    render() {
        return (
            <nav className="nav has-shadow">
                <div className="nav-left">
                    <a className="nav-item">
                    <img src="http://polarcape.com/wp-content/uploads/2016/12/logo-dark-svg.svg" alt="Bulma logo" />
                    </a>
                </div>

                <span className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className="nav-right nav-menu">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/simple-route" className="nav-item">Simple Route</Link>
                    <Link to="/route-with-param/JohnDoe" className="nav-item">Route with param</Link>
                    <Link to="/guarded-route" className="nav-item">Guarded Route</Link>

                    <div className="nav-item">
                    <div className="field is-grouped">
                        <p className="control">
                        <a className="button" href="https://github.com/PolarCape/react-polartalks-example" target="_blank">
                            <span className="icon">
                                <i className="fa fa-github"></i>
                            </span>
                            <span>GitHub</span>
                        </a>
                        </p>
                    </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default NavigationComponent;