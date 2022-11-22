import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { toast } from "react-toastify";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import { AiFillHome } from "react-icons/ai";

import * as Yup from 'yup';
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";


const url = "https://trinitstechnologies.com/demo/api/v1/employees";
export default function EmployeeForm({ onCancel, onaddeddata, initialValues }) {

  return (
    <div>
      <div
        className=' m-4 shadow  p-3 rounded text '>
        <Link to="/" > <AiFillHome className="font border border-white shadow rounded " /> Home </Link>/Employee
        <div className=" float-end">
          <h4 className="text-dark">Employees</h4>
        </div>
      </div>
      <div className="border p-4 shadow m-4 text rounded">
        <div> <h3 className="text-center text-dark ">EmployeeForm</h3></div>
        <div className="border  w-100 p-4 shadow m-auto bg-white rounded">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              empName: Yup.string().required("empName is required"),
              empNo: Yup.string().required("empNo is required"),
              designation: Yup.string().required("designation is required"),
              bankAccount: Yup.string().required("bankAccount is required"),
              pan: Yup.string().required("pan is required"),
              doj: Yup.string().required("doj is required"),

            })

            }
            onSubmit={(values) => {

              if (values && values.id) {
                axios.put(url + "/" + values.id, values)
                  .then(response => {
                    toast.success("Successfully updated to the server" + response.data,
                      {
                        position: toast.POSITION.BOTTOM_LEFT
                      });



                    onaddeddata();
                  })
                  .catch(error => toast.error('error occurred while update' + error,
                    {
                      position: toast.POSITION.BOTTOM_LEFT
                    }));
              } else {
                axios.post(url, values)
                  .then(response => {

                    toast.success("Successfully Saved to the server" + response.data,
                      {
                        position: toast.POSITION.BOTTOM_LEFT
                      });


                    onaddeddata();
                  })
                  .catch(error => toast.error('error occurred while saving ' + error,
                    {
                      position: toast.POSITION.BOTTOM_LEFT
                    }));
              }
            }}









          >

            <Form >
              <div className="d-flex mt-2 m-4">

                <div className="w-50 ">
                  <Field name="empName" type="text" placeholder="empName" className="form-control p-3  " />
                  <small className="text-danger">
                    <ErrorMessage name="empName" />
                  </small>

                </div>
                <div className="w-50">
                  <Field name="empNo" type="text" placeholder="empNo" className="form-control ms-2 p-3" />

                  <small className="text-danger">
                    <ErrorMessage name="empNo" />
                  </small>
                </div>
              </div>
              <div className="d-flex mt-2 m-4">
                <div className="w-50">
                  <Field name="designation" type="text" placeholder="designation" className="form-control p-3" />
                  <small className="text-danger">
                    <ErrorMessage name="designation" />
                  </small>
                </div>
                <div className="w-50">
                  <Field name="bankAccount" type="text" placeholder="bankAccount" className="form-control ms-2 p-3" />
                  <small className="text-danger">
                    <ErrorMessage name="bankAccount" />
                  </small>
                </div>
              </div>
              <div className="d-flex mt-2 m-4">

                <div className="w-50">
                  <Field name="pan" type="text" placeholder=" pan" className="form-control p-3" />
                  <small className="text-danger">
                    <ErrorMessage name="pan" />
                  </small>
                </div>
                <div className="w-50">
                  <Field name="doj" type="text" placeholder=" doj" className="form-control ms-2 p-3" />
                  <small className="text-danger">
                    <ErrorMessage name="doj" />
                  </small>
                </div>
              </div>
              <div className="mt-2 m-4">
                <ReactTooltip />
                <button className="btn btn-outline-info " data-tip="save Employee data" ><AiOutlineCheckCircle className="font2" /></button>
                <button className="btn btn-outline-danger ms-3  " data-tip="cancel Form" onClick={onCancel}><AiOutlineCloseCircle className="font2" /></button>
              </div>

            </Form>


          </Formik>
        </div>
      </div>
      </div>
      )
}