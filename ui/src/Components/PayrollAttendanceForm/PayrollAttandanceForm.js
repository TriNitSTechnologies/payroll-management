import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import ReactTooltip from 'react-tooltip';
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
export default function PayRollAttendenseForm({ cancel, Ondelete }) {
    const [value11, setValue11] = useState(null);

    const timings = [
        { name: 'Present' },
        { name: 'Leave' },
        { name: 'Half Day' },
        { name: 'Unpaid Leave' },
        { name: 'Unpaid Half Day' }
    ];
    return (
        <div>
            <Formik initialValues={{
                Date: '',
                Status: '',
                CheckIn: '',
                CheckOut: '',
                Duration: '',
                Textarea: ''
            }}
                validationSchema={Yup.object({
                    Date: Yup.string().trim().required("Date is required"),
                    Status: Yup.string().trim().required("Status is required"),
                    CheckIn: Yup.string().trim().required("Check in is required"),
                    CheckOut: Yup.string().trim().required("Check out is required"),
                    Duration: Yup.string().trim().required("Duration is required"),
                    Textarea: Yup.string().trim().required("Text area is required")

                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                <Form>
                    <ReactTooltip />
                    <div className="card shadow  m-4 ">
                        <div className="card-header p-3 fontSize-icon">
                            <b>Change Attendance</b>
                            <b className='float-end text-danger'></b>
                        </div>
                        <div className='mt-2 p-3 m-3'>
                            <h6>Change your attendance on 01/11/2022</h6>
                            <div className='d-flex'>
                                <div className='col-6'>

                                    <span className="p-float-label">
                                        
                                        <Dropdown inputId="dropdown" value={value11} options={timings} onChange={(e) => setValue11(e.value)} optionLabel="name" className="form-control"  />
                                        
                                    </span>
                                </div>
                                <div className='col-6 ms-3'>
                                    <Field
                                        className="form-control p-3"
                                        placeholder="Date"
                                        type="date"
                                        name="Date"
                                    />
                                    <div className='text-danger'>
                                        <ErrorMessage name="Date" />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className='col-6'>
                                    <Field
                                        className="form-control p-3"
                                        placeholder="CheckIn"
                                        type="time"
                                        name="CheckIn"
                                    />
                                    <div className='text-danger'>
                                        <ErrorMessage name="CheckIn" />
                                    </div>
                                </div>
                                <div className='col-6 ms-3'>
                                    <Field
                                        className="form-control p-3"
                                        placeholder="CheckOut"
                                        type="time"
                                        name="CheckOut"
                                    />
                                    <div className='text-danger'>
                                        <ErrorMessage name="CheckOut" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                <div className='col-6'>
                                    <Field


                                        className="form-control p-3"
                                        placeholder="Duration"
                                        type="time"

                                        id="Duration"

                                        name="Duration"


                                    />

                                    <div className='text-danger'>
                                        <ErrorMessage name="Duration" />
                                    </div>
                                </div>
                                <div className='col-6  ms-3'>
                                    <Field


                                        className="form-control p-3"
                                        placeholder="Textarea"
                                        type="message"

                                        id="textarea"

                                        name="Textarea"


                                    />

                                    <div className='text-danger'>
                                        <ErrorMessage name="Textarea" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 mt-3">
                                <button className="btn btn-outline-primary" data-tip="update">UPDATE</button>
                                <button className="btn btn-outline-danger ms-3" onClick={cancel} data-tip="cancel">CANCEL</button>
                                <button className="btn btn-outline-secondary float-end " onClick={Ondelete} data-tip="delete">DELETE ATTENDANCE</button>
                            </div>


                        </div>

                    </div>

                </Form>
            </Formik>

        </div>
    )

}