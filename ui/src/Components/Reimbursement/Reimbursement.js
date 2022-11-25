import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
export default function Reimbursement(){
  return (
    <div>
      <div className="card m-4  shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">
              <button className="rounded shadow back me-2 ">
                <Link to="/home" className="text-decoration-none back">
                  <BsHouseFill />
                </Link>
              </button>
              <Link to="/home" className="text-decoration-none text-dark me-1">
                Home
              </Link>
               / Reimbursement
            </small>
          </div>
          <div>
            <h5>Reimbursement</h5>
          </div>
        </div>
      </div>
      <Formik
      initialValues={{
        Expensedate:"",
        Details:"",
        Amount:"",
        choosefile:"",
      }}
      validationSchema={Yup.object({
        Expensedate:Yup.string().required("Expensedate is required"),
        Details:Yup.string().trim().required("Expense details is required"),
        Amount:Yup.string().trim().required("Expense amount is required"),
        choosefile:Yup.string().required("File is required"),

      })}
      onSubmit={(values)=>{
        alert(JSON.stringify(values));
      }}
      >
        <Form>
      <div className="card  m-4">
        <div className="card-header">
           <h3>Claim a Reimbursement</h3>
        </div>
       
        <div className="card-body">
           <div className="d-flex  justify-content-evenly">
              <div className="col-5 m-2 ">
                <select className="form-select p-3 reimbursement-dropdown" aria-label="Default  example" name="Picktheitem">
                    <option selected>Please pick a type</option>
                    <option value="1">Traval</option>
                     <option value="2">Hotel &Accommodation</option>
                     <option value="3">food</option>
                     <option value="3">Medical</option>
                     <option value="3">Telephone</option>
                     <option value="3">Fuel</option>
                     <option value="3">Imprest</option>
                     <option value="3">Other</option>
                </select>
              </div>
                <div className="col-5  m-2">
                  <Field className="form-control p-3"  type="date"  name="Expensedate"  />
                  <div className="text-danger">
                    <ErrorMessage name="Expensedate"/>
                  </div>
                </div>
                
              </div>
              <div className="d-flex  justify-content-evenly">
                 <div className="col-5 m-2 ">
                   <Field className="form-control p-3"  type="text"  placeholder="Any Details?" name="Details"/>
                 <div className="text-danger">
                   <ErrorMessage name="Details"/>
                 </div>
                 </div>
                <div className="col-5  m-2">
                  <Field className="form-control p-3"  type="text" placeholder="Amount*" name="Amount"/>
                  <div className="text-danger">
                  <ErrorMessage name="Amount"/>
                  </div>
                </div>
              </div>
              <div className="d-flex  justify-content-evenly">
                 <div className="col-5 m-2 ">
                 <Field class="form-control form-control-lg " id="formFileLg" type="file" name="choosefile"/>
                 <div className="text-danger">
                    <ErrorMessage name="choosefile"/>
                 </div>
                 </div>
                  <div className="col-5 m-2 ">
                  </div>
              </div> 
        </div>
      </div>
    
      <div className=" ms-4 mb-2">
        <button className="btn btn-primary btn-lg" type="submit"> REQUEST REIMBURSEMENT  </button>
      </div>
        
       
      </Form>
      </Formik>
    </div>
   
  )
}