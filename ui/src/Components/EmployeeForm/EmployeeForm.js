import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";


import * as Yup from 'yup';


const url="https://trinitstechnologies.com/demo/api/v1/employees";
export default function EmployeeForm({onSave,onCancel,selected}){
  
  useEffect(() =>{
    if(selected){
       const result=selected;
      Formik.setValues(result);
    }}
  )
    return(
        <div>
             <div className="border  w-100 p-4 shadow m-auto bg-white rounded">

<Formik 
 initialValues={{empName:'',empNo:'',designation:'',bankAccount:'',pan:'',doj:'',}}
 validationSchema={Yup.object({
    empName :Yup.string().required("userId is required"),
    empNo:Yup.string().required("title is required"),
   designation:Yup.string().required("body is required"),
   bankAccount:Yup.string().required("body is required"),
   pan:Yup.string().required("body is required"),
   doj:Yup.string().required("body is required"),

 })
  
 }
 onSubmit={(values)=>{
  
  alert(JSON.stringify(values));

            

 }
   
 }


 >
  
 <Form >
<div className="d-flex mt-2">
  
  <div className="w-50"> 
   <Field name="empName" type="text" placeholder="empName"   className="form-control p-3 " />
  <small className="text-center">
     <ErrorMessage name="empName" className="text-danger" />
     </small>
  
     </div>
     <div className="w-50">
   <Field name="empNo" type="text"placeholder="empNo" className="form-control ms-2 p-3" />
   
   <small className="text-danger">
     <ErrorMessage name="empNo" />
   </small>
   </div>
   </div>
   <div className="d-flex mt-2">
   <div className="w-50">
   <Field name="designation" type="text"  placeholder="designation"className="form-control p-3" />
   <small className="text-danger">
     <ErrorMessage name="designation" />
   </small>
   </div>
   <div className="w-50">
   <Field name="bankAccount" type="text"  placeholder="bankAccount" className="form-control ms-2 p-3" />
   <small className="text-danger">
     <ErrorMessage name="bankAccount" />
   </small>
   </div>
   </div>
   <div className="d-flex mt-2">
 
   <div className="w-50">
   <Field name="pan" type="text"  placeholder=" pan" className="form-control p-3" />
   <small className="text-danger">
     <ErrorMessage name="pan" />
   </small>
   </div>
  <div className="w-50">
   <Field name="doj" type="text"  placeholder=" doj"className="form-control ms-2 p-3" />
   <small className="text-danger">
     <ErrorMessage name="doj" />
     </small>
     </div>
   </div>
   <div className="mt-2">
     <button className="btn btn-outline-info" onClick={onSave} >Save</button>
     <button className="btn btn-outline-danger ms-2  " onClick={onCancel}>Cancel</button>
   </div>
   
   </Form>  


 </Formik>
 </div>
        </div>
    )
}