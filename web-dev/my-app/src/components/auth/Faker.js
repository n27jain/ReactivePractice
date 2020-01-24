import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form } from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'ca-central-1:70e84667-09b9-4265-866b-5465d75cf9ec',
        
        // REQUIRED - Amazon Cognito Region
        region: 'ca-central-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'ca-central-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ca-central-1_jMUhyiz5I',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '317lrvnn4tbon13lrgh7d7j1va',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
       // mandatorySignIn: false,
    }
});

    
        

export default function Login (props)  {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = (email,password) =>{
        console.log("Here",email,password);
        Auth.signUp({
            username: email,
            password,
            attributes: {
                email,          // optional
            },
            validationData: []  //optional
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    
    }

     function handleSubmit(event){
        console.log("Submitted");
        event.preventDefault();
        console.log(email,password);
        signup(email,password)
    }
    
     
    return (

        <div className="login-form">

        <Form onSubmit = {handleSubmit}>
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
                Submit 
            </Button>
        </Form >
            
        </div>
    );
    
}
