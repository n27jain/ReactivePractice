import React from 'react';

import {
    Link
} from 'react-router-dom';

import Registration from '../components/auth/Registration'
import { SignIn } from '../components/auth/AwsReg';

const LoginScreen = props => {

    return(
        <div>
            {/* <br></br>
            <SignIn></SignIn> */}
            <Registration></Registration>
        </div>
    );
};
export default LoginScreen;