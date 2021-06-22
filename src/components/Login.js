import React from 'react'
import styled from 'styled-components'
import logo from "../Images/slack-logo.png"
import {Button} from "@material-ui/core";
import { auth, provider } from '../firebase';

function Login() {

    const signIn = (event) =>
    {
        event.preventDefault()
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }


    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={logo} alt="Slack Logo" />
                <h1>Sign in and be a part of an amazing community!</h1>

                <Button onClick={signIn} >Sign In with Google</Button>
             </LoginInnerContainer>        
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.section`


display: grid;
height: 100vh;
place-items: center;
background-color: #f8f8f8;
`;
const LoginInnerContainer = styled.div`
width: 60%;
@media (max-width: 420px) {
    width: 75%;
    height: 30rem;
    padding: 30px;

  }
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);


> img{
    object-fit: contain;
    height: 5rem;
    margin-bottom: 3.5rem;
}

>button
{
    text-transform: uppercase;
    margin-top: 4rem;
    background-color: #0a8d48;
    color:white;
}

`;
