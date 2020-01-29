import 'bootstrap/dist/css/bootstrap.min.css';
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
        alert("Failed")
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
                data => {
                    console.log(data);
                    alert("Success")
                   
                }
                )
            .catch(err => {
                console.log(err);
                //TODO: Alert User of the issue
                alert("", err.message);
          
            });

}
