
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
import Reports from "./Components/NewReport/Reports";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                
import "primeicons/primeicons.css";                              
import Joinletter from "./Components/Offer Letter/offerletter";
import Payslip1 from "./Components/Payslip1/Payslip1";
import Payslip2 from "./Components/Payslip2/Payslip2";
import Payslip3 from "./Components/Payslip3/Payslip3";
import Notifications from "./Components/Notifications/Notifications";
import MainHead from "./Components/MainPage/Main-Head";
import PrintAppoiement from "./Components/Letter of Appoiement/APPOIEMENT.print";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import Upload from "./Components/upload-documents/upload-documents";
 

import Attendense from "./Components/Attendense/Attendense";
import Payslips from "./Components/Payslip/Payslips";
import Buttons from "./Components/Buttons/Buttons";


 import Salary from "./Components/Salary/Salary"
 import Preview from "./Components/Preview/Preview"



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
            <Route path="/Attendense" >
              <Attendense />
            </Route>

            <Route path="/documents">
              <Documents />
            </Route>
            <Route path="/Payslips">
              <Payslips/>
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/newReport">
            <Reports />
            </Route>
            <Route path="/Payslip1">
            <Payslip1 />
            </Route>
            <Route path="/Payslip2">
            <Payslip2 />
            </Route>
            <Route path="/Payslip3">
            <Payslip3 />
            </Route>
            <Route path="/buttons">
            <Buttons />
            </Route>
          

            <Route path="/offer-letter">
              <OfferLetter />
            </Route>
            <Route path="profile">
              <MyProfile />
            </Route>
            <Route path="PrintAppoiement">
              <PrintAppoiement />
            </Route>
            <Route path="/notifications">
              <Notifications/>
            </Route>
 
            <Route path="/uploadD">
              <Upload/>
            </Route>

          
         <Route path='/Payslip4'>
         <Payslip4 />
         </Route>

         <Route path="/salary">
          <Salary />
        </Route>

        <Route path="/Preview">
          <Preview />
        </Route>


            </>}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
