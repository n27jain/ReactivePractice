import React, { useState , text} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Toast } from 'react-bootstrap';
import {SignIn, SignUp} from './AwsReg'

import './Registration.css'

export default function Register (props)  {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event){
        console.log("Submitted");
        event.preventDefault();
        console.log(email,password);
        SignUp(email,password);
    }
    
     
    return (

        <div className="login-form" >
        <text className = "login-text">SignUp</text>
        <Form className = "form-style" onSubmit = {handleSubmit}>
            <Form.Group controlId = "formBasicEmail">
                <Form.Control 
                    type="email"
                    autoFocus
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control
                    type="password" 
                    autoFocus
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password" />
            </Form.Group>
        
            <Button type="submit" >
                Sign In or Sign Up
            </Button>
        </Form >
            
        </div>
    );
    
}