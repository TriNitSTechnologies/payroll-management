

import "./Relivingletter.css";
import { useFormik } from "formik";
import * as Yup from 'yup'

export default function Relievingletter(props) {
    // const history = useHistory();

    // history.push("/relivingform")


    // function handlebtn() {


    // }


    const formik = useFormik({
        initialValues: {
            CompanyName: "",
            CompanyAddress: "",
            CurrentData: "",
            EmployeeName: "",
            EmployeeResignationData: "",
            Employeerelievingdata: "",
            Employeedesignation: "",
            Employeejoiningdata: "",
            HRname: "",
            HRdesignation: "",

        },
        validationSchema: Yup.object({
            CompanyName: Yup.string().trim().required("Company name is required"),
            CompanyAddress: Yup.string().trim().required("Company address is required"),
            CurrentData: Yup.string().trim().required("  Current date is required"),
            EmployeeName: Yup.string().trim().required("Employee name is required"),
            EmployeeResignationData: Yup.string().trim().required(" Employee resignation date is reqrequired "),
            Employeerelievingdata: Yup.string().trim().required(" Employee relieving date is required"),
            Employeedesignation: Yup.string().trim().required("Employee designation is required"),
            Employeejoiningdata: Yup.string().trim().required("Employee joining date is required"),
            HRname: Yup.string().trim().required("Hr name  is required"),
            HRdesignation: Yup.string().trim().required("Hr designation is required"),


        }),



        onSubmit: values => {

            // alert(JSON.stringify( values,2,null))
            props.Relievingletters(values)
            console.log(JSON.stringify(values))

        }
    })
    return (

        <div className=" w-100  border shadow d-flex card  reliving" >
            <form onSubmit={formik.handleSubmit} >

                <div className="card-header p-2 m-2 d-flex">
                    <h3 className="Relieving">Relieving Letter Details</h3>

                </div>
                <div className="card-body">
                    <div className="w-100  d-flex  ">
                        <span className="m-2 w-50  justify-content-evenly">
                            <b className="p-1">Company Name</b>

                            <input type="text" placeholder="Company Name " className="form-control p-2" name="CompanyName"{...formik.getFieldProps("CompanyName")} />
                            {formik.touched.CompanyName && formik.errors.CompanyName ? (
                                <div className="text-danger">{formik.errors.CompanyName}</div>
                            ) : null}
                        </span>

                        <span className="m-2 w-50  justify-content-evenly">
                            <b className="p-2">Company Address</b>

                            <input type="text" placeholder="Company Address" className="form-control p-2" name="CompanyAddress"{...formik.getFieldProps("CompanyAddress")} />
                            {formik.touched.CompanyAddress && formik.errors.CompanyAddress ? (
                                <div className="text-danger">{formik.errors.CompanyAddress}</div>
                            ) : null}

                        </span>
                    </div>
                    <div className="w-100  d-flex justify-content-evenly ">
                        <span className="m-2 w-50">
                            <b className="p-2">Current Date</b>
                            <input type="date" placeholder="Current Address" className="form-control p-2" name="CurrentData"{...formik.getFieldProps("CurrentData")} />
                            {formik.touched.CurrentData && formik.errors.CurrentData ? (
                                <div className="text-danger">{formik.errors.CurrentData}</div>
                            ) : null}

                        </span>
                        <span className="m-2 w-50">
                            <b className="p-2">Employee Name</b>
                            <input type="text" placeholder="Employee Name" className="form-control p-2" name="EmployeeName"{...formik.getFieldProps("EmployeeName")} />
                            {formik.touched.EmployeeName && formik.errors.EmployeeName ? (
                                <div className="text-danger">{formik.errors.EmployeeName}</div>
                            ) : null}

                        </span>
                    </div>
                    <div className="w-100 d-flex ">
                        <span className="m-2 w-50" >
                            <b className="p-2">Employee Resignation Date</b>
                            <input type="date" className="form-control p-2" name="Employee_Resignation_Data"{...formik.getFieldProps("EmployeeResignationData")} />
                            {formik.touched.EmployeeResignationData && formik.errors.EmployeeResignationData ? (
                                <div className="text-danger">{formik.errors.EmployeeResignationData}</div>
                            ) : null}

                        </span>
                        <span className="m-2 w-50">
                            <b className="p-2">Employee Relieving Date</b>
                            <input type="date" className="form-control p-2" name="Employeerelievingdata"{...formik.getFieldProps("Employeerelievingdata")} />
                            {formik.touched.Employeerelievingdata && formik.errors.Employeerelievingdata ? (
                                <div className="text-danger">{formik.errors.Employeerelievingdata}</div>
                            ) : null}

                        </span>

                    </div>
                    <div className="w-100 d-flex ">
                        <span className="m-2 w-50" >
                            <b className="p-2">Employee Designation</b>
                            <input type="text" placeholder="Employee Designation" className="form-control p-2" name="Employeedesignation" {...formik.getFieldProps("Employeedesignation")} />
                            {formik.touched.Employeedesignation && formik.errors.Employeedesignation ? (
                                <div className="text-danger">{formik.errors.Employeedesignation}</div>
                            ) : null}



                        </span>
                        <span className="m-2 w-50">
                            <b className="p-2">Employee Joining Date</b>
                            <input type="date" className="form-control p-2" name="Employeejoiningdata" {...formik.getFieldProps("Employeejoiningdata")} />
                            {formik.touched.Employeejoiningdata && formik.errors.Employeejoiningdata ? (
                                <div className="text-danger">{formik.errors.Employeejoiningdata}</div>
                            ) : null}

                        </span>

                    </div>
                    <div className="w-100  d-flex ">
                        <span className=" m-2 w-50">
                            <b className="p-2">HR Name</b>
                            <input type="text" placeholder="HR Name" className="form-control p-2" name="HRname"{...formik.getFieldProps("HRname")} />
                            {formik.touched.HRname && formik.errors.HRname ? (
                                <div className="text-danger">{formik.errors.HRname}</div>
                            ) : null}


                        </span>
                        <span className="m-2 w-50">
                            <b className="p-2">HR Designation</b>
                            <input type="text" placeholder="HR Designation" className="form-control p-2" name="HRdesignation"{...formik.getFieldProps("HRdesignation")} />
                            {formik.touched.HRdesignation && formik.errors.HRdesignation ? (
                                <div className="text-danger">{formik.errors.HRdesignation}</div>
                            ) : null}
                        </span>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-lg mx-2  mt-2" type="submit" >Generate Letter</button>
                    </div>
                </div>

            </form>
        </div>
    );
}



