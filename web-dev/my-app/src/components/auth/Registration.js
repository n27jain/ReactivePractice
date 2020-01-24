import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log("Changed");
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    handleSubmit(event){
        console.log("Submitted");
        event.preventDefault();
    }

    render() {
        return (
            <div className="login-form">
            <Form className="login-form">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit 
            </Button>
            </Form>



                {/* <form  onSubmit = {this.handleSubmit}>
                   

                    <input type = "email" 
                        name = "email"
                        placeholder = "Email" 
                        value = { this.state.email}
                        onChange = {this.handleChange} required
                    />

                    <input type = "password" 
                        name = "password"
                        placeholder = "Password" 
                        value = { this.state.password}
                        onChange = {this.handleChange} required
                    />
                    <input type = "password" 
                        name = "password_confirmation"
                        placeholder = "Password Confirmation" 
                        value = { this.state.password_confirmation}
                        onChange = {this.handleChange} required
                    />

                

                    
                </form> */}
            </div>
        )
    }
}
