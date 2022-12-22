
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

import Help from "./Components/Help/Help";
import Refer from "./Components/Refer/Refer";

import { useEffect, useState } from "react";
import Register from "./Components/LoginPage/Register";
import Login from "./Components/LoginPage/Login";
import Payslip4 from "./Components/Payslip4/Payslip4";
import ForgotPassword from "./Components/LoginPage/ForgotPassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainbody from "./Components/MainPage/Main-Body";
import { useSelector } from "react-redux";
import React from "react";
import MyProfile from "./Components/My-Profile/My-Profile";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Details from "./Components/Details/details";
import SelectProfile from "./Components/Selected-profile/selected-profile";
import Payslip1 from "./Components/Payslip1/Payslip1";
import Payslip2 from "./Components/Payslip2/Payslip2";
import Payslip3 from "./Components/Payslip3/Payslip3";
import Notifications from "./Components/Notifications/Notifications";
import MainHead from "./Components/MainPage/Main-Head";
import PrintAppoiement from "./Components/LetterofAppointment/Appointment.print";
import Upload from "./Components/upload-documents/upload-documents";
import Payslips from "./Components/Payslip/Payslips";
import Buttons from "./Components/Buttons/Buttons";
import Reimbursement from "./Components/Reimbursement/Reimbursement";
import Appointment from "./Components/Documents/Appointment";
import OfferLetter from "./Components/Appointment/OfferLetter";
import AttendenseForm from "./Components/AttendanceForm/AttendanceForm";
import Appraisal from "./Components/Appraisal-Form/Appraisal-form";
import AppraisalLetter from "./Components/Appraisal-Letter/Appraisal-letter";
import AppraisalDocument from "./Components/Appraisal-Doc/Appraisal-Doc";

import Payslip5 from "./Components/payslip5/payslip5";
 import Salary from "./Components/Salary/Salary"
 import Preview from "./Components/Preview/Preview"
import Bonafide from "./Components/Bonafide/bonafide";
import Payslip6 from "./Components/payslip6/payslip6";


function App() {
  let userrouter = useHistory()
  const [sidebarstatus, setSidebarStatus] = useState(false);
  const isUserLoggedIn = useSelector(state => state.login.isUserLoggedIn)
  const sidebarclass = sidebarstatus ? 'sidebar' : "sidebar sidebar-collapse";
  function handlesidebarstatus() {
    setSidebarStatus((previousstate) => {
      return !previousstate;
    })
  }
  useEffect(() => {

    if (isUserLoggedIn) {
      userrouter.push("/home")
    } else {
      userrouter.push("/")
    }
  }, [isUserLoggedIn]);

  return (
    <div>
      <div className="head">
        {!isUserLoggedIn && <>
          <MainHead />
        </>}
        {isUserLoggedIn && <>
          <Header hidesidebar={handlesidebarstatus} />
        </>}
      </div>
      <div className="d-flex ">
        <div className="">
          {isUserLoggedIn && <>
            <div className={sidebarclass}>
              <Sidebar />
            </div>
          </>}
        </div>
        <div className="main">
          <Switch>
            {!isUserLoggedIn && <>
              <Route path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/" exact>
                <Mainbody />
              </Route>


              <Route path="/login">
                <Login />
              </Route>

            </>}

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
              <Route path="/reimbursement">
                <Reimbursement />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/Attendense" >
                <AttendenseForm />
              </Route>

              <Route path="/documents">
                <Documents />
              </Route>
              <Route path="/Payslips">
                <Payslips />
              </Route>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/appointment">
                <Appointment />
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
              <Route path='/Payslip4'>
                <Payslip4 />
              </Route>
              <Route path='/Payslip5'>
                <Payslip5 />

              </Route>

              <Route path="/buttons">
                <Buttons />
              </Route>
              <Route path="/React.PureComponent ">
                <React.PureComponent />
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
                <Notifications />
              </Route>

              <Route path="/uploaddocs">
                <Upload />
              </Route>
              <Route path="/salary">
                <Salary />
              </Route>

              <Route path="/Preview">
                <Preview />
              </Route>

              <Route path='/details'>
                <Details />
              </Route>

              <Route path='/selectprofile'>
                <SelectProfile />
              </Route>

              <Route path='/appraisal'>
                <Appraisal />
              </Route>

              <Route path='/appletter'>
                <AppraisalLetter />
              </Route>

              <Route path='/appdocument'>
                <AppraisalDocument />
              </Route>


              <Route path='/Payslip6'>
                <Payslip6 />

              </Route>
              <Route path="/help">
              <Help />
            </Route>
            <Route path="/refer">
              <Refer />
            </Route>
              </>
            }
          </Switch>

        </div>

      </div>
    </div>
  );
}

export default App;
