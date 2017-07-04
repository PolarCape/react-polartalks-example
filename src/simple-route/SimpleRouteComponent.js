import React, { Component } from 'react';

class SimpleRouteComponent extends Component {
    constructor(props){
        super(props);
        this.state = {name: '', surname: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Form submitted: ', this.state);
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <div className="form-wrapper container has-text-centered">
                    <div className="field">
                        <label className="label">Name</label>
                        <p className="control">
                            <input name="name"
                                   className="input"
                                   type="text"
                                   placeholder="John"
                                   value={this.state.name}
                                   onChange={this.handleChange}/>
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Surname</label>
                        <p className="control">
                            <input name="surname"
                                   className="input"
                                   type="text"
                                   placeholder="Doe"
                                   value={this.state.surname}
                                   onChange={this.handleChange}/>
                        </p>
                    </div>
                    <div className="field is-grouped">
                        <p className="control">
                            <button onClick={this.handleSubmit} className="button is-primary">Submit</button>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default SimpleRouteComponent;