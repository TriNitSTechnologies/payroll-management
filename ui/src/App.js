
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./Components/Home/Home";
import Report from "./Components/Report/Report";
import Company from "./Components/Company/Company";
import Employees from "./Components/Employees/Employees";
import Settings from "./Components/Settings/Settings";
import Documents from "./Components/Documents/Documents";
import { useEffect, useState } from "react";
import Register from "./Components/LoginPage/Register";
import Login from "./Components/LoginPage/Login";
import Payslip4 from "./Components/Payslip4/Payslip4";
import ForgotPassword from "./Components/LoginPage/ForgotPassword";
import MainPage from "./Components/MainPage/Main-Head";
import Mainbody from "./Components/MainPage/Main-Body";
import { useSelector } from "react-redux";
import Appointment from "./Components/Appointment/appointment";
import React from "react";
import MyProfile from "./Components/My-Profile/My-Profile";
import OfferLetter from "./Components/Documents/Appointment";
import Notifications from "./Components/Notifications/Notifications";
import MainHead from "./Components/MainPage/Main-Head";



import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
function App() {
  let userrouter=useHistory()
const[sidebarstatus,setSidebarStatus] = useState(false);
const isUserLoggedIn= useSelector(state=>state.login.isUserLoggedIn)
const sidebarclass = sidebarstatus ? 'sidebar': "sidebar sidebar-collapse";
function handlesidebarstatus(){
  setSidebarStatus((previousstate)=>{
    return !previousstate;
  })
}
useEffect(()=>{
  
  if(isUserLoggedIn){
    userrouter.push("/home")
  }else{
    userrouter.push("/")
  }
},[isUserLoggedIn])




  return (
    <div>
      <div className="head">
        {!isUserLoggedIn && <>
      <MainHead />
        </>}
        {isUserLoggedIn && <>
        <Header hidesidebar={handlesidebarstatus}/>
        </>}
      </div>
      <div className="d-flex">
        {isUserLoggedIn && <>
        <div className={sidebarclass}>
          <Sidebar />
        </div>
        </>}
        <div className="main">
          <Switch>
          {!isUserLoggedIn && <>
            
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/" exact>
            <Mainbody/>
            </Route>
            
            <Route path="/login">
              <Login />
            </Route>
          </> }
             
            {isUserLoggedIn && <>
            <Route path="/report">
              <Report />
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
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>

            <Route path="/offer-letter">
              <OfferLetter />
            </Route>
            <Route path="profile">
              <MyProfile />
            </Route>
            <Route path="/notifications">
              <Notifications/>
            </Route>
            </>}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
