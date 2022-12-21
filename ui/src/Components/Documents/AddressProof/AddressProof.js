


import "./AddressProof.css";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { Link } from "react-router-dom";

export default function AddressProof(props) {
 


  const formik = useFormik({
    initialValues: {
      CompanyName: "",
      CompanyAddress: "",
      CurrentDate: "",
      EmployeeName: "",
      Employeedesignation: "",
      Employeejoiningdate: "",
      Employeecurrentaddress: "",
      HRname: "",
      HRdesignation: "",

    },
    validationSchema: Yup.object({
        CompanyName: Yup.string().trim().required("Company name is required"),
        CompanyAddress: Yup.string().trim().required("Company address is required"),
        CurrentDate: Yup.string().trim().required("  Current data is required"),
        EmployeeName: Yup.string().trim().required("Employee name is required"),
        Employeedesignation: Yup.string().trim().required(" Employee designation is reqrequired "),
        Employeejoiningdate: Yup.string().trim().required(" Employee joining data is required"),
        Employeecurrentaddress: Yup.string().trim().required("Employee current address is required"),

        HRname: Yup.string().trim().required("Hr name  is required"),
        HRdesignation: Yup.string().trim().required("Hr designation is required"),


    }),



    onSubmit: (values) => {
      props.AddressProof(values);
      console.log(values);
      

      // alert(JSON.stringify(values, null, 2))
    }
  })






  return (
    <div className=" w-100  border shadow d-flex card " >
      <form onSubmit={formik.handleSubmit}>
        <div className="card-header p-2 m-2 d-flex">
          <h3>Address proof details</h3>
        </div>
        <div className="card-body">
          <div className="w-100  d-flex ">
            <span className="m-3 w-50 ">
           <b className="p-2">Company_Name</b>

              <input type="text" placeholder="TriNits Technologies Private Limated" className="form-control p-3" name="CompanyName"{...formik.getFieldProps("CompanyName")} />
              <div>
                <small className="text-danger">
                  {formik.errors.CompanyName}
                </small>
              </div>
            </span>

            <span className="m-3 w-50 ">
              <b  className="p-2">Company_Address</b>

              <input type="text" placeholder="No. 6-2-204,Naidupeta,Andhra Pradesh,India-524421,Andhra Pradesh 524421" className="form-control p-3 " name="CompanyAddress"{...formik.getFieldProps("CompanyAddress")} />
              <div>
                <small className="text-danger">
                  {formik.errors.CompanyAddress}
                </small>
              </div>

            </span>
          </div>
          <div className="w-100 d-flex ">
            <span className="m-3 w-50">
              <b  className="p-2">Current_Date </b>
              <input type="date"  className="form-control p-3"  name="CurrentDate"{...formik.getFieldProps("CurrentDate")} />
              <div>
                <small className="text-danger">
                  {formik.errors.CurrentDate}
                </small>
              </div>

            </span>
            <span className="m-3 w-50">
              <b  className="p-2">Employee_Name</b>
              <input type="text" placeholder="Trinits Technologies" className="form-control p-3 " name="EmployeeName"{...formik.getFieldProps("EmployeeName")} />
              <div>
                <small className="text-danger">
                  {formik.errors.EmployeeName}
                </small>
              </div>

</span>
          </div>
          <div className="w-100 d-flex ">
            <span className="m-3 w-50" >
              <b  className="p-2">Employee_Designation </b>
              <input type="text" placeholder="Software engineer" className="form-control p-3 " name="Employeedesignation"{...formik.getFieldProps("Employeedesignation")} />
              <div>
                <small className="text-danger">
                  {formik.errors.Employeedesignation}
                </small>
              </div>

            </span>
            <span className="m-3 w-50">
              <b  className="p-2">Employee_Joining_Date</b>
              <input type="date" className="form-control p-3 "  name="Employeejoiningdate"{...formik.getFieldProps("Employeejoiningdate")} />
              <div>
                <small className="text-danger">
                  {formik.errors.Employeejoiningdate}
                </small>
              </div>

            </span>

          </div>
          <div className="w-100 d-flex ">
            <span className="m-3 w-50" >
              <b  className="p-2">Employee_Current_Address</b>
              <input type="text"   placeholder="Karuru"className="form-control p-3 " name="Employeecurrentaddress" {...formik.getFieldProps("Employeecurrentaddress")} />
              <div>
                <small className="text-danger">
                  {formik.errors.Employeecurrentaddress}
                </small>
              </div>



            </span>
            <span className="m-3 w-50">
              <b  className="p-2">HR_Name</b>
              <input type="text"placeholder="Sudha" className="form-control p-3 "  name="HRname" {...formik.getFieldProps("HRname")} />
              <div>
                <small className="text-danger">
                  {formik.errors.HRname}
                </small>
              </div>

            </span>

          </div>
          <div className="w-100  d-flex ">
            <span className=" m-3 hrdata">
              <b  className="p-2">HR_Designation</b>
              <input type="text" placeholder="HR" className="form-control p-3"  name="HRdesignation"{...formik.getFieldProps("HRdesignation")} />
              <div>
                <small className="text-danger">
                  {formik.errors.HRdesignation}
                </small>
              </div>


            </span>
          
          </div>
        </div>
        <div>
          <button className="btn btn-primary  btn-lg mx-3 " >GENERATE LETTER</button>
        </div>
      </form>
    </div>
  )
}