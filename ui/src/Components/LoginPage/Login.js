import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  return (
    <>
      <div className="w-100">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Email Address is Required").trim(),
            password: Yup.string().required("Password is Required").trim(),
          })}
          onSubmit={(values) => {
            axios
              .post(
                "https://trinitstechnologies.com/demo/api/v1/user/login",
                values
              )
              .then((response) => {});
          }}
        >
          <div className="formbg">
            <h1 className="text-center mt-1 mb-4 fontstyless fw-bold   ">
              TriNitS Technologies Pvt Ltd
            </h1>

            <Form className="border shadow-lg rounded-4 m-4 p-4 w-75 m-auto">
              <div className="text-center">
                <h2>Login</h2>
                <p>Access to our dashboard</p>
              </div>
              <div>
                <label className="mt-2 p-2">Email Address</label>
                <div>
                  <Field name="username" className="form-control p-3" />
                </div>
                <div className="text-danger">
                  <ErrorMessage name="username" />
                </div>
              </div>
              <div>
                <label className="mt-2 p-2">Password</label>
                <div>
                  <Field name="password" className="form-control p-3 " />
                </div>
                <div className="text-danger">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <div className="d-flex  justify-content-between">
                <span className="d-flex  justify-content-start">
                  <input type="checkbox" />
                  <label className="form-check-label p-2">Remember me</label>
                </span>
                <span className="p-2">
                  {" "}
                  <Link to="/forgot-password">Forgot password ?</Link>
                </span>
              </div>

              <div className="mt-3 rounded-4 " bg-success>
                <button className=" buttoncolor rounded-3 p-2 text-light">
                  Login
                </button>
              </div>
              <div className="login-or">
                <span className="or-line"></span>
                <span className="span-or">or</span>
              </div>
            
              <p className="text-center">
                Don't have an account yet?<Link to="/register"> Register </Link>
              </p>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
}
