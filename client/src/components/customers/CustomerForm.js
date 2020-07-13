import React, { Component } from 'react'

class CustomerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addCustomer(customer) {
        const url = 'http://localhost:8080/customers';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => this.props.onCustomerSubmit(json));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addCustomer(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        });
    }

    handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastNameChange(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    handlePhoneChange(event) {
        this.setState({
            phone: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    render() {
        return (
            <form className="customer-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    required
                /> 
                <input
                    type="text"
                    placeholder="Surname"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    required
                /> 
                <input
                    type="tel"
                    placeholder="Phone number"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    required
                /> 
                <input
                    type="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    required
                />  
                <input type="submit" value="Create"/>
            </form>
        )
    }
}

export default CustomerForm;
