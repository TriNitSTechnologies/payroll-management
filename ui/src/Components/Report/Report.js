import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { BsHouseFill } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { initpayslipData } from "../Store/PayslipSlice";
import { useState } from "react";
import Documents from "../Documents/Documents";



const PAYSLIP_URL ="https://trinitstechnologies.com/demo/api/v1/payroll?authorization=12"
function Report() {
 const dispatch= useDispatch();
 const history = useHistory();
//  const[showpayslipform,setshowPayslipform] =useState(false);
  function fetchPayslip(event){
    const payload =event;
    if(payload){
      axios
      .post(PAYSLIP_URL,payload)
      .then((response)=>{
        let data = response.data;
        dispatch(initpayslipData(data))
        history.push('/documents')
      })
      .catch((error)=>alert.error("error whill fetching the data"+error));
    }
    event.preventDefault();


  }
//   if(showpayslipform){

 
  // return(
  //   <>
  // <div className="">
  // <div className="container  d-flex  my-2 border shodow p-2">
  //   <span className="ms-auto">
  //     <button className="btn btn-primary" onClick={() => alert('will print later')} >Print</button>
  //     <button className=" ms-2 btn btn-primary" onClick={() => setshowPayslipform(false)}>Closepayslip</button></span>


  // </div>

  // <Documents />
         
  // </div>
 
  // </>
  // )
  return (
    <div>
      <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">
              <button className="rounded shadow back me-2 ">
                <Link to="/" className="text-decoration-none back">
                  <BsHouseFill />
                </Link>
              </button>
              <Link to="/" className="text-decoration-none text-dark me-1">
                Home
              </Link>
               / Reports
            </small>
          </div>
          <div>
            <h5>Payslip Report</h5>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          companyName: "",
          empNo: "",
          paymentMonth: "",
          noOfWorkingDays: "",
          grossSalary: "",
        }}
        validationSchema={Yup.object({
          companyName: Yup.string().trim().required("Company name is required"),
          empNo: Yup.string().trim().required("Employee no is required"),
          paymentMonth: Yup.string()
            .trim()
            .required("Date of month/year is required"),
          noOfWorkingDays: Yup.string()
            .trim()
            .required("No of working days is required"),
          grossSalary: Yup.string().trim().required("Gross salary is required"),
        })}
        onSubmit={(values) => {
          fetchPayslip(values)
          console.log("value" + values)
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <div className="card m-4 shadow ">
            <div className="card-header">
              <h5>Payslip details</h5>
            </div>
            <div className="card-body pay  ">
              <div className="d-flex  justify-content-evenly">
                <div className="col-5 m-2 ">
                  <Field
                    className="form-control p-3 "
                    placeholder="Company Name"
                    type="text"
                    name="companyName"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="companyName" />
                  </div>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Employee No"
                    type="text"
                    name="empNo"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="empNo" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Date Of Month /year"
                    type="date"
                    name="paymentMonth"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="paymentMonth" />
                  </div>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Number Of Working Days"
                    type="text"
                    name="noOfWorkingDays"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="noOfWorkingDays" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Gross Salary"
                    type="text"
                    name="grossSalary"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="grossSalary" />
                  </div>
                </div>
                <div className="col-5  m-2"></div>
              </div>
            </div>
          </div>
          <div className=" ms-4 mb-2">
            <button className="btn btn-primary btn-lg" type="submit"
            //  onClick={ ()=>{ setshowPayslipform(true)}}
            >
              Get Payslip
             
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Report;
