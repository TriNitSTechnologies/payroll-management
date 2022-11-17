import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./appointment.css"

export default function Appointment() {
  return (
    <Formik
      initialValues={{
        CompanyName: "",
        CompanyAddress: "",
        CurrentDate: "",
        EmployeeName: "",
        JobTitle: "",
        AnnualCTC: "",
        ManagerName: "",
        EmployeeJoiningDate: "",
        AcceptanceLastDate: "",
        HRName: "",
      }}
      validationSchema={Yup.object({
        CompanyName: Yup.string().required("Company Name is requried"),
        CompanyAddress: Yup.string().required("Company Address is requried"),
        CurrentDate: Yup.string().required("Current Date is requried"),
        EmployeeName: Yup.string().required("Employee Name is requried"),
        JobTitle: Yup.string().required("Job Title is requried"),
        AnnualCTC: Yup.string().required("Annual CTC is requried"),
        ManagerName: Yup.string().required("Manager Name is requried"),
        EmployeeJoiningDate: Yup.string().required(
          "Employee Joining Date  is requried"),
        AcceptanceLastDate: Yup.string().required(" Requried"),
        HRName: Yup.string().required("HR Name is requried"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}  
    >
      <div>
        <Form>
          <div className="card m-4 pay shadow ">
            <div className="card-body d-flex justify-content-between ">
              <div>
                <small className="fs-6">placeholder</small>
              </div>
              <div>
                <h5>Appointment Letter</h5>
              </div>
            </div>
          </div>
          <div className="card m-4 shadow ">
            <div className="card-header">
              <h5>Appointment Letter</h5>
            </div>
            <div className="card-body pay  ">
              <div className="d-flex  justify-content-evenly">
                <div className="col-5 m-2">
                  <Field
                    className="form-control p-3  "
                    name="CompanyName"
                    placeholder="Company Name"
                    type="text"
                  />

                  <small className="text-danger">
                   
                    <ErrorMessage name="CompanyName" />
                  </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="CompanyAddress"
                    placeholder="Company Address"
                    input="text"
                  />
                  <small className="text-danger">
                   
                   <ErrorMessage name="CompanyAddress" />
                 </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="CurrentDate"
                    placeholder="Current Date"
                    type="text"
                  />
                  <small className="text-danger">
                   
                   <ErrorMessage name="CurrentDate" />
                 </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="EmployeeName"
                    placeholder="Employee Name"
                    type="text" 
                  />
                  <small className="text-danger">
                   
                   <ErrorMessage name="EmployeeName" />
                 </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="JobTitle"
                    placeholder="Job Title"
                    type="text"
                  />
                  <small className="text-danger">
                   
                   <ErrorMessage name="JobTitle" />
                 </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="AnnualCTC"
                    placeholder="Annual CTC"
                    type="text"
                  />
                   <small className="text-danger">
                   
                   <ErrorMessage name="AnnualCTC" />
                 </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="ManagerName"
                    placeholder="Manager Name"
                    type="text"
                    
                  />
                   <small className="text-danger">
                   
                   <ErrorMessage name="ManagerName" />
                 </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="EmployeeJoiningDate"
                    placeholder="Employee Joining Date"
                    type="text"
                  />
                  <small className="text-danger">
                   
                   <ErrorMessage name="EmployeeJoiningDate" />
                 </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="AcceptanceLastDate"
                    placeholder="Acceptance Last Date"
                    type="text"
                  />
                  <small className="text-danger">
                   
                   <ErrorMessage name="AcceptanceLastDate" />
                 </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="HRName"
                    placeholder="HR Name"
                    type="text"
                  />
                   <small className="text-danger">
                   
                   <ErrorMessage name="HRName" />
                 </small>
                </div>
              </div>

              <div className="d-flex justify-content-evenly">
                <div className="col-5  ">
                 
              <div className="form-check  ">
                <input
                  className="form-check-input "
                  type="checkbox"
               
                  
                />
                <label className="form-check-label  text-primary text-opacity-75">
                  Include Xpayroll generated salary structure from annual CTC
                </label>
              </div>
                </div>
                <div className="col-5  m-2">
                  
                  
                  
                </div>
              </div>

            </div>
            <div className=" ms-4 text-center ">
            <button className="btn btn-primary btn-lg ">GENERATE LETTER</button>
          </div>
          </div>

          
        </Form>
      </div>
    </Formik>
  );
}
