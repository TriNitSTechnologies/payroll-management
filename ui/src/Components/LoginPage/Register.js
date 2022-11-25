import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {
  return (
    <>
    <div className="background  ">
      <Formik
        initialValues={{
          username: "",
          password: "",
          firstName: "",
          
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Email is Required").trim(),
          firstName: Yup.string().required("Enter your full Name").trim(),
          password: Yup.string().required("Password is Required").trim(),
          conformationpassword: Yup.string()
            .required("Re-enter your Password")
            .trim(),
        })}
        onSubmit={(values) => {
          axios
            .post("https://trinitstechnologies.com/demo/api/v1/user", values)
            .then((response) => {
              console.log(values)
              alert("done");

              // history.push("/");
            });
        }}
      >
        <div className="formbg ">
         
          <Form className="border formdata shadow-lg rounded-4 formformate p-3  w-25 ">
            <div className="text-center">
              <h2>Register</h2>
              <p>Access to our dashboard</p>
            </div>
            <div>
              <label className=" p-2">NAME</label>
              <div>
                <Field name="firstName" className="form-control p-1" />
              </div>
              <div className="text-danger">
                <ErrorMessage name="firstName" />
              </div>
            </div>
            <div>
              <label className="mt-1 p-2">Email Address</label>
               <div>
                <Field name="username" className="form-control p-1" />
              </div>
              <div className="text-danger">
                <ErrorMessage name="username" />
              </div>
            </div>
            <div>
              <label className="mt-1  p-2">Password</label>
              <div>
                <Field name="password" className="form-control p-1 " />
              </div>
              <div className="text-danger">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div>
              <label className="mt-1 p-2">Confirm Password</label>
              <div>
                <Field
                  name="conformationpassword"
                  className="form-control p-1"
                />
              </div>
              <div className="text-danger">
                <ErrorMessage name="conformationpassword" />
              </div>
            </div>

            <div className="mt-3 rounded-4" bg-success>
              <button className=" buttoncolor rounded-3 p-2 text-light">
                Register
              </button> 
            </div>
            <div className="login-or">
              <span className="or-line"></span>
              <span className="span-or">or</span>
            </div>
           
            <p className="text-center">
              Already have an account?<Link to="/login"> Login</Link>{" "}
            </p>
          </Form>
        </div>
      </Formik>
      </div>
    </>
  );
}
