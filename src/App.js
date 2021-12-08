import './App.css';
import Dash from "./Dashboard"
import Posts from "./pages/Posts";
import SignIn from "./pages/signIn";
import TopBar from './Navbar';


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <TopBar />
      <Switch>
        <Route path="/" exact component={Dash} />
        <Route path="/posts" component={Posts} />
        <Route path= "/signin" component={SignIn} />
      </Switch>
    </div>
    </Router>
  );
}



export default App;
