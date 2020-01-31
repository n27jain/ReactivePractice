import React , { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignIn  from '../components/auth/SignIn';
import Registration from '../components/auth/Registration';

import './LoginScreen.css'

const LoginScreen = props => {
    

    const [login, setLogin] = useState(true);

    const loginToggleHandler = () => {
        setLogin(!login);
      };
    
    let buttonShow;
    let formType;

    if(login){
        buttonShow = ( 
        <React.Fragment>
            <Button  type="submit" variant="light" onClick = {loginToggleHandler}>
                Register Instead
            </Button>
        </React.Fragment>
        );
        
        formType = <SignIn SignedInToggleHandler = {props.SignedInToggleHandler}/>
       
    }
    else{
        buttonShow = ( 
        <React.Fragment>
            <Button type="submit" variant="light" onClick = {loginToggleHandler}>
                Already have an account? Log In
            </Button>
        </React.Fragment>
        );
        formType =  <Registration SignedInToggleHandler = {props.SignedInToggleHandler}/>;
    }


    return(
        <div className = "style-button" >
           {formType}
           <text>OR</text>
           <br/>
           {buttonShow}

        </div>
    );
};
export default LoginScreen;