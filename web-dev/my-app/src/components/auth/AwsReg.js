import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'ca-central-1:9c8e3e54-e9d6-4dcc-9c80-845116f7aa45',
        
        // REQUIRED - Amazon Cognito Region
        region: 'ca-central-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'ca-central-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ca-central-1_X5rqz2NoE',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '7r8520ti5l7urjkmoqosh1sa1d',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
       // mandatorySignIn: false,
    }
});


export async function SignIn(username, password, props) {
    try {
        const user = await Auth.signIn({
            username, // Required, the username 
            password, // Optional, the password
            }).then(
                user => {
                    console.log("RECIEVED:", user);
                    props.SignedInToggleHandler();
            }
            )
        .catch(err => console.log(err));
        // The user directly signs in
        console.log("Should got");
        return user;
    } catch (err) {
        alert("Failed")
    }
    
}
export async function SignUp(name, email, password){
    console.log("Here",email,password);
        Auth.signUp({
            username: email,
            name: name,
            password,
            attributes: {
                email,  
                name,        // optional
            },
            validationData: []  //optional
            })
            .then(
                data => {
                    console.log(data);
                    alert("Success")
                    return data;
                }
                )
            .catch(err => {
                console.log(err);
                //TODO: Alert User of the issue
                alert("", err.message);
                return err;
            });

}

export async function LogOut(props){
    await Auth.signOut();
    props.SignedInHandler(false);
}
