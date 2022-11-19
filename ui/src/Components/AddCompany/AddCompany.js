import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import * as Yup from 'yup';
import './AddCompany.css'
import { BsHouseFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const SERVER_URL = "https://trinitstechnologies.com/demo/api/v1/companies"

function AddCompany(props) {

    
    return (
        <div>
             <div className="shadow border p-3 rounded m-3 maindata-content  mt-3">
                <div>
               
                    
                    <Link to="/" className="text-black text-decoration-none ms-2"> <BsHouseFill  className='me-2'/>Home</Link>/
                    <Link to="/Company" className="text-black text-decoration-none">Company</Link>

                </div>
                <div>
                    <b>Companies</b>
                </div>

            </div>
            <ReactTooltip />



            <Formik initialValues={props.initialValues}
                validationSchema={Yup.object({
                    companyName: Yup.string().required('Company name is required'),
                    mobileNumber: Yup.string().required('Phone number is required'),
                    addressLine1: Yup.string().required('Address is required'),
                    logoName: Yup.string().required('Logo name is required'),
                    addressLine2: Yup.string().required('Address  is required'),
                    state: Yup.string().required('State is required'),
                    town: Yup.string().required('Town is required'),
                    pinCode: Yup.string().required('Pincode is required')

                })}
                onSubmit={(values) => {
                    if(values && values.id){
                        axios.put(SERVER_URL+"/"+values.id, values)
                            .then(response => {
                                toast.success("Successfully updated to the server", {
                                    position: toast.POSITION.BOTTOM_LEFT
                                  });
                              
                                
                                props.onAddCompnay();
                            })
                            .catch(error => toast.error('error occurred while saving it ' + error));
                    }else {
                        axios.post(SERVER_URL+"/", values)
                            .then(response => {
                                
                                toast.success("Successfully Saved to the server", {
                                    position: toast.POSITION.BOTTOM_LEFT
                                  });
                                props.onAddCompnay();
                            })
                            .catch(error => toast.error('error occurred while saving it ' + error));
                    }
                }}>
                <Form>
                    <div className="card m-4 shadow card-hover">
                        <div className="card-header">
                            <h5>Add Company Information</h5>
                        </div>
                        <div className="card-body ">
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
                                        placeholder="Mobile Number"
                                        type="number"
                                        name="mobileNumber"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="mobileNumber" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <div className="col-5  m-2">
                                    <Field
                                        className="form-control p-3"
                                        placeholder="Address1"
                                        type="text"
                                        name="addressLine1"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="addressLine1" />
                                    </div>
                                </div>
                                <div className="col-5  m-2">
                                    <Field
                                        className="form-control p-3"
                                        placeholder="Address2"
                                        type="text"
                                        name="addressLine2"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="addressLine2" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <div className="col-5  m-2">
                                    <Field
                                        className="form-control p-3"
                                        placeholder="Logo Name"
                                        type="text"
                                        name="logoName"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="logoName" />
                                    </div>
                                </div>
                                <div className="col-5  m-2">
                                    <Field
                                        className="form-control p-3"
                                        placeholder="State"
                                        type="text"
                                        name="state"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="state" />
                                    </div>

                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <div className="col-5  m-2">
                                    <Field
                                        className="form-control p-3"
                                        placeholder="Town"
                                        type="text"
                                        name="town"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="town" />
                                    </div>
                                </div>
                                <div className="col-5  m-2">
                                    <Field
                                        className="form-control p-3"
                                        placeholder="Pin Code"
                                        type="text"
                                        name="pinCode"
                                    />
                                    <div className="text-danger">
                                        <ErrorMessage name="pinCode" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className=" ms-5  mb-2 ">
                        <button className="btn btn-outline-success rounded shadow " data-tip="sucessfully saved"> <BsCheckCircleFill className='me-2'/>Save</button>
                        <button className="btn btn-outline-danger ms-3 rounded shadow " onClick={props.onCancel} data-tip="Cancel"><AiOutlineClose className='me-2'/>Cancel</button>


                    </div>



                    </div>
                    


                </Form>

            </Formik>


        </div>
    )
}
export default AddCompany;