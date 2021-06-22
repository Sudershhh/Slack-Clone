import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core';
import AccessTime from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import MenuIcon from '@material-ui/icons/Menu';
import { auth } from "../firebase.js" 


function Header(props) {

    const [user] = useAuthState(auth);

    const setshow = () =>
    {
        props.display()
    }

    const signOut = () =>
    {
        auth.signOut();
    }

    return (
        <HeaderContainer>
            <MenuIcon onClick={setshow} />
            
            <HeaderLeft>
                <HeaderAvatar src={user?.photoURL} alt={user?.displayName} />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input type="search" placeholder="Search ..." />
            </HeaderSearch>


            <HeaderRight>
                <HelpOutlineIcon />
                <button onClick={signOut}>Sign Out</button>
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.nav`
display: flex;
padding: 10px 0;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
color:white;
height: 50px;
background-color: var(--slack-color);

> .MuiSvgIcon-root
    {
    display: none;

    }

@media (max-width: 420px) {
    > .MuiSvgIcon-root
    {
    display: block;
    margin-left:1rem;
    }

  }



`;


const HeaderSearch = styled.div`
flex: 0.4;
opacity:1;
background-color: #421f44;
text-align: center;
border-radius: 10px;
display: flex;
padding: 0 30px;
color:gray;
border: 1px solid gray;

 > input
 {
     background-color: transparent;
     border: none;
     outline: none;
     padding-left: 20px;
     color: white;
     min-width: 30vw;
 }
 @media (max-width: 420px) {
    display: none;

  }


`; 

const HeaderLeft = styled.div`
flex:0.3;
display: flex;
align-items: center;

>.MuiSvgIcon-root
  {
    margin-left: auto;
    margin-right: 30px;
  }
  @media (max-width: 420px) {
    >.MuiSvgIcon-root
    {
        margin-left: 20px;
    }

  }

`;

const HeaderRight = styled.div`
flex: 0.3;
display: flex;

>.MuiSvgIcon-root
{
    margin-left: auto;
    margin-right: 20px;
}

>button{
    cursor: pointer;
    color: var(--slack-color);
    margin-right: 30px;
    width: 5rem;
    height: 1.4rem;
    background-color: white;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
}

`;


const HeaderAvatar = styled(Avatar)`
cursor: pointer;
margin-left: 1rem;
:hover
{
    opacity:0.8
}

`;


