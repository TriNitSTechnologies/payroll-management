import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./appointment.css";

export default function OfferLetter(props) {
  return (
    <Formik
      initialValues={{
        companyName: "",
        companyAddress: "",
        currentDate: "",
        employeeName: "",
        jobTitle: "",
        annualCTC: "",
        managerName: "",
        employeeJoiningDate: "",
        acceptanceLastDate: "",
        hrName: "",
      }}
      validationSchema={Yup.object({
        companyName: Yup.string().required("Company Name is requried"),
        companyAddress: Yup.string().required("Company Address is requried"),
        currentDate: Yup.string().required("Current Date is requried"),
        employeeName: Yup.string().required("Employee Name is requried"),
        jobTitle: Yup.string().required("Job Title is requried"),
        annualCTC: Yup.string().required("Annual CTC is requried"),
        managerName: Yup.string().required("Manager Name is requried"),
        employeeJoiningDate: Yup.string().required(
          "Employee Joining Date  is requried"
        ),
        acceptanceLastDate: Yup.string().required("Acceptance date is Requried"),
        hrName: Yup.string().required("HR Name is requried"),
      })}
      onSubmit={(values) =>{
        props.OfferLetter(values)
        alert(JSON.stringify(values));
      }}
    >
      <div>
        <Form>
          <div className="card m-4 pay shadow ">
            <div className="card-body d-flex justify-content-between ">
              <div>
                <small className="fs-6">Home </small>
              </div>
              <div>
                <h5>Offer Letter</h5>
              </div>
            </div>
          </div>
          <div className="card m-4 shadow ">
            <div className="card-header">
              <h5>Offer letter details</h5>
            </div>
            <div className="card-body pay">
              <div className="d-flex  justify-content-evenly">
                <div className="col-5 m-2">
                  <Field
                    className="form-control p-3  "
                    name="companyName"
                    placeholder="Company name"
                    type="text"
                  />

                  <small className="text-danger">
                    <ErrorMessage name="companyName" />
                  </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="companyAddress"
                    placeholder="Company address"
                    input="text"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="companyAddress" />
                  </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="currentDate"
                    placeholder="Current date"
                    type="date"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="currentDate" />
                  </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="employeeName"
                    placeholder="Employee name"
                    type="text"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="employeeName" />
                  </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="jobTitle"
                    placeholder="Job title"
                    type="text"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="jobTitle" />
                  </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="annualCTC"
                    placeholder="Annual CTC"
                    type="text"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="annualCTC" />
                  </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="managerName"
                    placeholder="Manager name"
                    type="text"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="managerName" />
                  </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="employeeJoiningDate"
                    placeholder="Employee joining date"
                    type="date"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="employeeJoiningDate" />
                  </small>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="acceptanceLastDate"
                    placeholder="Acceptance last date"
                    type="date"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="acceptanceLastDate" />
                  </small>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    name="hrName"
                    placeholder="HR name"
                    type="text"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="hrName" />
                  </small>
                </div>
              </div>

              <div className="d-flex justify-content-evenly">
                <div className="col-5  ">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckChecked"
                    >
                      Include Xpayroll generated salary structure from annual
                      CTC
                    </label>
                  </div>
                </div>
                <div className="col-5  m-2"></div>
              </div>
            </div>
          </div>

          <div className=" ms-4  ">
            <button className="btn btn-primary btn-lg ">GENERATE LETTER</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
}
