import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from "./components/Chat"
import Login from './components/Login';
import { auth } from './firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from "react-spinkit"
import logo from "./Images/slack-logo.png"


function App() {
  
  const [user, loading] = useAuthState(auth);
  const [isshowMenu, setShowMenu] = useState(true)

  const setDisplay = () =>
  {
    setShowMenu(prevState=> !prevState);
  }


  if(loading){
      return(
          <AppLoading>
              <AppLoadingContents>
                  <img src={logo} alt="Slack Logo" />
                  <Spinner name="ball-spin-fade-loader"
                           color="purple"
                           fadeIn="none"
                  />
              </AppLoadingContents>
          </AppLoading>
      );
  }


  return (
    <div>
      <Router>

      {user ? (<>
        <Header display={setDisplay} />
        
        
        <AppBody>

          {isshowMenu && <Sidebar />}
            <Switch>
              <Route path="/" exact>
                  <Chat />
              </Route>
            </Switch>

        </AppBody>
       </>) : ( <Login />)}

        
      
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;

`;

const AppLoading = styled.section`
display: grid;
place-items: center;
height: 100vh;
`;
const AppLoadingContents = styled.div`

text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4rem;

>img{
  object-fit: contain;
  height: 5rem;
  margin-bottom: 40px;
  padding: 1.2rem;
}



`;