import React, { useState , text} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Toast } from 'react-bootstrap';
import {SignIn, SignUp} from './AwsReg'
//import { useHistory } from "react-router-dom";

import './Registration.css'

export default function Register (props)  {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    function handleSubmit(event){
        console.log("Submitted");
        event.preventDefault();
        console.log(email,password);
        const user = SignUp(name,email,password);
        console.log("User Returns", user);
        if(user != null){
            props.SignedInToggleHandler();
            //useHistory().push("/Chat")
        }
        
    }
    
     
    return (

        <div className="login-form" >
        <text className = "login-text">Sign Up</text>
        <Form className = "form-style" onSubmit = {handleSubmit}>
            <Form.Group controlId = "formBasicName">
                <Form.Control 
                    type="name"
                    autoFocus
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name" />
            </Form.Group>
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
                Register
            </Button>
        </Form >
            
        </div>
    );
    
}