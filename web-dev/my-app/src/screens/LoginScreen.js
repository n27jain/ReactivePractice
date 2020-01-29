import React from 'react';
import './LoginScreen.css'

import Registration from '../components/auth/Registration'
import { SignIn } from '../components/auth/AwsReg';

const LoginScreen = props => {

    return(
        <div className ="login-screen">
            {/* <br></br>
            <SignIn></SignIn> */}
            <Registration></Registration>
        </div>
    );
};
export default LoginScreen;