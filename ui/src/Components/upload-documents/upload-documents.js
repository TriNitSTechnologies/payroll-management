import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import './upload-documents.css'
export default function Upload() {

  const MySelect = ({label, ...props}) => {
    const [field,meta] = useField(props)
    return(
      <div>
        <select {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
      </div>
    )
  }
  return (
    <>
      <div className="card m-4 pay shadow ">
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
              / Documents
            </small>
          </div>
          <div>
            <h4>Documents</h4>
          </div>
        </div>
      </div>
      <div className="  d-flex  ">
        <div className="card w-100 h-75 m-4 ">
          <div className="card-header">
            <h4>Documents</h4>
          </div>
          <Formik
            initialValues={{
              Upload: "",
              Description: "",
              imagesdocuments: "",
            }}
            validationSchema={Yup.object({
              Upload: Yup.string().trim()
              .oneOf(
                ["ProfessionalDocuments","Degree","Aadhaar","TaxDeductions","EmploymentContract","PreviousEmployment","BankAccount","Other","CommonOrganization"],
                "invalid job type"
              )
              .required(<small className="text-danger">Upload documents is requried</small>),
              Description: Yup.string()
                .trim()
                .required("Description is requried"),
              imagesdocuments: Yup.string()
                .trim()
                .required("images or documents is requried"),
            })}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            <div className="card-body w-50  m-2  h-100 ">
              <Form>
                <div> Upload new documents(* is mandatory)</div>
                <MySelect
                  className="form-select mt-1 input-style-content w-75"
                  aria-label="Default select example"
                  name="Upload"
                >
                  
                  <option value="">Please pick a type</option>
                  <option value="ProfessionalDocuments">Professional Documents</option>
                  <option value="Degree">Degree*</option>
                  <option value="Aadhaar">Aadhaar*</option>
                  <option value="TaxDeductions">Tax Deductions Supporting Documents</option>
                  <option value="EmploymentContract">Employment Contract</option>
                  <option value="PreviousEmployment">Previous Employment Documents </option>
                  <option value="BankAccount"> Bank Account Details</option>
                  <option value="Other">Other</option>
                  <option value="CommonOrganization">Common Organization Documents</option>
                  
                </MySelect>
                {/* <small className="text-danger">
                    <ErrorMessage name="Upload" />
                  </small> */}
                <div className=" mt-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    class0Name="form-label"
                  >
                    Description?
                  </label>
                  <Field
                    type="text"
                    className="form-control form-control-lg input-style-content w-75"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="Description"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="Description" />
                  </small>
                </div>

                <div className=" mt-2">
                  <label htmlFor="formFileLg" className="form-label   ">
                    images or documents (maximum 5 MB each)*
                  </label>
                  <Field
                    className="form-control form-control-lg   input-style-content w-50"
                    id="formFileLg"
                    type="file"
                    name="imagesdocuments"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="imagesdocuments" />
                  </small>
                </div>
                <div className="w-75 mt-3">
                  <button type="submit" class="btn btn-primary btn-lg">
                    Upload Document(S)
                  </button>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </>
  );
}
