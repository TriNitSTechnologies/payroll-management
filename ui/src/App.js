
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

import Appointment from "./Components/Appointment/appointment";
import { useState } from "react";
import Register from "./Components/LoginPage/Register";
import Login from "./Components/LoginPage/Login";
import Payslip4 from "./Components/Payslip4/Payslip4";
import ForgotPassword from "./Components/LoginPage/ForgotPassword";
import MyProfile from "./Components/My-Profile/My-Profile";
import OfferLetter from "./Components/Documents/Appointment";


function App() {
  const [sidebarstatus, setSidebarStatus] = useState(false);
  const sidebarclass = sidebarstatus ? "sidebar" : "sidebar sidebar-collapse";
  // function handlesidebarstatus(){
  //   setSidebarStatus((previousstate)=>{
  //     return !previousstate;
  //   })
  // }
  function handlesidebarstatus() {
    setSidebarStatus((previousstate) => {
      return !previousstate;
    });
  }

  return (
    <div>
      <div className="head">
        <Header hidesidebar={handlesidebarstatus} />
      </div>
      <div className="d-flex">
        <div className={sidebarclass}>
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

            <Route path="/payslip">
              <Payslip4 />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>

            <Route path='/offer-letter'>
              <OfferLetter/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
