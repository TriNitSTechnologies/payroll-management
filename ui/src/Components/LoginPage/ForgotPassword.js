    import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function ForgotPassword() {
  return (
    <>
      <Formik
        initialValues={{
          conformationemail: "",
        
        }}
        validationSchema={Yup.object({
          
          conformationemail: Yup.string().required("Email is required").trim(),
         
        })}
        onSubmit={(values) => {
          
            alert(JSON.stringify(values, null, 2));
            
        }}
      >
        <div className="formbg ">
          <h1 className="text-center mt-5 mb-4 fontstyless fw-bold">
            TriNitS Technologies Pvt Ltd
          </h1>

          <Form className="border formdata shadow-lg rounded-4 m-4 p-4 w-75 m-auto ">
            <div className="text-center">
              <h2>Forgot Password?</h2>
              <p>Enter your email to get a password reset link</p>
            </div>
            <div>
              <label className="mt-2 p-2">Email Address</label>
              <div>
                <Field name="conformationemail" className="form-control p-2"  />
              </div>
              <div className="text-danger">
                <ErrorMessage name="conformationemail" />
              </div>
            </div>
           

            <div className="mt-2 rounded-4">
              <button className="buttoncolor rounded-3  p-2 fw-bold text-light">
              Reste Password
              </button>
            </div>
            
            <p className="text-center">Remember your password?<Link to="/loginpage"> Login</Link> </p>
          </Form>
        </div>
      </Formik>
    </>
  );
}
