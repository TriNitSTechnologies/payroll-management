import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { object } from "yup/lib/locale";
function Report() {
  return (
    <div>
      {/* eMyB6qGRzMGUXCu */}
      {/* trinitstechnologies@gmail.com */}
      <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">Home / Reports</small>
          </div>
          <div>
            <h5>Payslip Report</h5>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          CompanyName: "",
          EmployeeNo: "",
          Dom: "",
          NoOfWorkingDays: "",
          GrossSalary: "",
        }}
        validationSchema={Yup.object({
          CompanyName: Yup.string().trim().required("Companyname is required"),
          EmployeeNo: Yup.string().trim().required("EmployeeNo is required"),
          Dom: Yup.string().trim().required("date of month/year is required"),
          NoOfWorkingDays: Yup.string()
            .trim()
            .required("No Of Working Days is required"),
          GrossSalary: Yup.string().trim().required("Gross Salary is required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <div className="card m-4 shadow ">
            <div class="card-header">
              <h5>Payslip Details</h5>
            </div>
            <div className="card-body pay  ">
              <div className="d-flex  justify-content-evenly">
                <div className="col-5 m-2 ">
                  <Field
                    className="form-control p-3 "
                    placeholder="Company Name"
                    type="text"
                    name="CompanyName"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="CompanyName" />
                  </div>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Employee No"
                    type="text"
                    name="EmployeeNo"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="EmployeeNo" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Date Of Month /year"
                    type="date"
                    name="Dom"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="Dom" />
                  </div>
                </div>
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Number Of Working Days"
                    type="text"
                    name="NoOfWorkingDays"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="NoOfWorkingDays" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5  m-2">
                  <Field
                    className="form-control p-3"
                    placeholder="Gross Salary"
                    type="text"
                    name="GrossSalary"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="GrossSalary" />
                  </div>
                </div>
                <div className="col-5  m-2"></div>
              </div>
            </div>
          </div>
          <div className=" ms-4 mb-2">
            <button className="btn btn-primary btn-lg ">Get Payslip</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
export default Report;
