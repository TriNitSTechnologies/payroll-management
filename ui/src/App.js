import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Report from "./Components/Report/Report";
import Company from "./Components/Company/Company";
import Employees from "./Components/Employees/Employees";
import Settings from "./Components/Settings/Settings";
import Documents from "./Components/Documents/Documents";
import Loginpage from "./Components/LoginPage/Login";
import Forgatpasswordpage from "./Components/LoginPage/ForgotPassword";
import Register from "./Components/LoginPage/Register";

function App() {
  return (
    <div>
      <div className="head">
        <Header />
      </div>

      <div className="d-flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/report">
              <Report />
            </Route>
            <Route path="/Forgatpasswordpage">
              <Forgatpasswordpage />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            
            <Route path="/Loginpage">
              <Loginpage />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/documents">
              <Documents />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
