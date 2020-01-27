import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from 'aws-amplify';

export async function SignIn(username, password) {
    try {
        const user = await Auth.signIn({
            username, // Required, the username 
            password, // Optional, the password
            }).then(user => console.log(user))
        .catch(err => console.log(err));
        // The user directly signs in
        console.log(user);
        
    } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
            console.log(err);
        } 
        else if (err.code === 'PasswordResetRequiredException') {
            console.log(err);
        } 
        else if (err.code === 'NotAuthorizedException') {
            console.log(err);    } 
        else if (err.code === 'UserNotFoundException') {
            console.log(err);    } 
        else {
            console.log(err);
        }
    }
}
export async function SignUp(email, password){
    console.log("Here",email,password);
        Auth.signUp({
            username: email,
            password,
            attributes: {
                email,          // optional
            },
            validationData: []  //optional
            })
            .then(
                data => alert("Success")
               
                )
            .catch(err => {
                console.log(err);
                //TODO: Alert User of the issue
                alert("", err);
            });

}
// For advanced usage
// You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger

