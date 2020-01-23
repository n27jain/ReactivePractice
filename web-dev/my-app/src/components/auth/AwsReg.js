import { Auth } from "aws-amplify";
import React from 'react'

export async function handleSubmit(event){
    event.preventDefault();

    try{
        await Auth.signIn(email,password);
        alert("Logged in" );

    } catch(e){
        alert(e.message);
    }
}