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
import Register from "./Components/LoginPage/Register";
import Login from "./Components/LoginPage/Login";
import Capgemini from "./Components/Capg/Capgemini";
import ForgotPassword from "./Components/LoginPage/ForgotPassword";

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
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            
            <Route path="/login">
              <Login />
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

            <Route path="/capgemini">
              <Capgemini />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
