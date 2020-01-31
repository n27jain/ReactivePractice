import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SignIn } from './AwsReg';
import './Registration.css';

export default function Register (props)  {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const history = useHistory();

    function handleSubmit(event){

        console.log("Submitted");
        event.preventDefault();
        console.log(email,password);
        SignIn(email,password,props);

           // props.SignedInToggleHandler();
            //history.push('/Chat');
        
       
    }
   
     
    return (
        
        <div className="login-form" >
        <text className = "login-text">Sign In</text>
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
                Sign In
            </Button>
        </Form >
            
        </div>
    );
    
}