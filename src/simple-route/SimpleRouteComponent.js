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
        if(this.state.name && this.state.surname){
            console.log('Form submitted: ', this.state);
            event.preventDefault();
        }
    }

    getInput(type, placeholder){
        let classes = 'input';
        if(!this.state[type])
            classes += ' is-danger';
        return (
            <input name={type}
                   className={classes}
                   type="text"
                   placeholder={placeholder}
                   value={this.state[type]}
                   onChange={this.handleChange}/>
        )
    }

    render() {
        return (
            <section>
                <div className="form-wrapper container has-text-centered">
                    <div className="field">
                        <label className="label">Name</label>
                        <p className="control">
                            {this.getInput('name', 'John')}
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Surname</label>
                        <p className="control">
                            {this.getInput('surname', 'Doe')}
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