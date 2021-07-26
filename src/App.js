import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Resetpassword from './components/Resetpassword';
import AllURL from "./components/AllURL"
import CreateURL from "./components/CreateURL"

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" >
        <Register />
        </Route>
      </Switch>

      
      <Switch>
        <Route exact path="/home" >
        <Home/>
        </Route>
      </Switch>
     
      <Switch>
        <Route exact path="/login" >
        <Login />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/forgotpassword" >
        <ForgotPassword />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/resetpassword" >
        <Resetpassword />  
        </Route>       
      </Switch>

      <Switch>
        <Route exact path="/createurl" >
        <CreateURL />  
        </Route>       
      </Switch>

      <Switch>
        <Route exact path="/allurls" >
        <AllURL />  
        </Route>       
      </Switch>


    </BrowserRouter>
  );
}

export default App;