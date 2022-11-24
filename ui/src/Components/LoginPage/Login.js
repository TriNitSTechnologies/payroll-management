
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch  } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { logindata } from "../Store/LoginSlice";



export default function Login() {
  const dispatch = useDispatch();
  

  return (
    <>

    
   

      <div className="w-100 h-100 background ">
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

            console.log(values)
            dispatch(logindata(values))
            
            
          }}
        >
          <div className="formbg  " >
          

            <Form className="border shadow-lg  formformate p-2 rounded-4  w-25 ">
              <div className="text-center">
                <h2>Login</h2>
                <p>Access to our dashboard</p>
              </div>
              <div>
                <label className="mt-2 p-2">Email Address</label>
                <div>
                  <Field name="username" className="form-control p-2" />
                </div>
                <div className="text-danger">
                  <ErrorMessage name="username" />
                </div>
              </div>
              <div>
                <label className="mt-2 p-2">Password</label>
                <div>
                  <Field name="password" className="form-control p-2 " />
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
                <button type="submit" className=" buttoncolor rounded-3 p-2 text-light">
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
      {/* <div className="w-50">
      <img src={payroll} alt="circle" className="w-100" />
      </div> */}
    
    </>
  );

  
}
