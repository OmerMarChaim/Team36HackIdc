import React from 'react'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import Chats from "./Chats";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/*start of Header */ }
      {/* <Header /> */}
      {/* End of Header */}
     
      <Router>
        <Switch>
          <Route path="/chat/:person">
              <Header backButton='/chat' />
              <ChatScreen />
          </Route>  
          <Route path="/chat">
              <Header backButton='/' />
              <h1>I am chat page</h1>
              <h2>Roi is the king</h2>
              <Chats/>
          </Route>  
        
          <Route path="/">
            <Header />
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;