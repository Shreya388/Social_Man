import './App.css';
import React, { useState } from "react";
import Dash from "./Dashboard"
import Posts from "./pages/Posts";
import SignIn from "./pages/signIn";
import Messages from "./pages/Messages";
import TopBar from './Navbar';
import Feed from './pages/Feed';
import Tasks from './pages/Tasks';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    
    <Router>
    <div className="App">
    {
      isLoggedIn ?
      (<>
      <TopBar />
        <Switch>
        <Route path="/" exact component={Dash} />
        <Route path="/posts" component={Posts} />
        <Route path="/messages" component={Messages} />
        <Route path= "/feeds" component={Feed} />
        <Route path= "/tasks" component={Tasks} />
        <Route path= "/signin" component={SignIn} />

      </Switch>
      </>):
      (
        <SignIn setLogin={setIsLoggedIn} />
      )
    }
    </div>
    </Router>
    
  );
}



export default App;
