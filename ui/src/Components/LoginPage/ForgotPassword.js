    import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function ForgotPassword() {
  return (
    <>
    <div  className="background w-100 h-100 ">
      <Formik
        initialValues={{
          conformationemail: "",
        
        }}
        validationSchema={Yup.object({
          
          conformationemail: Yup.string().required("Email is required").trim().email('Invalid email'),
         
        })}
        onSubmit={(values) => {
          
            alert(JSON.stringify(values, null, 2));
            
        }}
      >
        <div className="formbg  ">

          <Form className="border formdata bgform shadow-lg formformate rounded-4   p-4 w-25  ">
            <div className="text-center ">
              <h2>Forgot password?</h2>
              <p>Enter your email to get a password reset link</p>
            </div>
            <div>
              <label className="mt-2 p-2">Email Address</label>
              <div>
                <Field name="conformationemail" type="email" className="form-control p-2"  />
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
            
            <p className="text-center">Remember your password?<Link to="/Login"> Login</Link> </p>
          </Form>
        </div>
      </Formik>
      </div>
    </>
  );
}
