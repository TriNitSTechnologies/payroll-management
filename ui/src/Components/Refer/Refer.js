import { useFormik } from "formik";
import * as Yup from 'yup';
import "./Refer.css";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";


function Refer() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      EmailAddress: "",
      PhoneNumber: "",

    },
    validationSchema: Yup.object({
      Name: Yup.string().trim().required("Name is reuired"),
      EmailAddress: Yup.string().trim().required("EmailAddress is required"),
      PhoneNumber: Yup.string().trim().required("PhoneNumber is required")


    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (<>
    <div className="card m-4 shadow ">
      <div className="card-body d-flex justify-content-between ">
        <div>
          <small className="fs-6">
            <button className="rounded shadow  me-2 border-none ">
              <Link to="/home" className="text-decoration-none ">
                <BsHouseFill />
              </Link>
            </button>
            <Link to="/home" className="text-decoration-none text-dark me-1">
              Home
            </Link>
            / Refer
          </small>
        </div>
        <div>
            <h5>Refer</h5>
          </div>
        </div>
        </div>



        <div className="width p-2 card m-4">

          <form onSubmit={formik.handleSubmit}>
            <h2>Love payroll management ?</h2>
            <h6>Help us spread the word!</h6>
            <p>Get 3 months free payroll execution for every successful referral.</p>
            <p>Your referred friend also gets 3 months free payroll excution.</p>

            <h4>Invite by sharing the link</h4>
            <div className=" shadow border w-75 p-3 d-flex">

              <div className="text-primary">
                https://payroll.management.com/signup?r=u-351026&name=Trinits+Technologies
              </div>
            </div>
            <h4 className="mt-3">Or Invite by sharing their details with us(this usually works better)</h4>
            <div className="w-50 m-2 p-2">
              <b>Name</b>
              <input type="Name" className="form-control" placeholder="Name" name="Name"{...formik.getFieldProps("Name")} />
              {
                <div className="text-danger">
                  <small>{formik.errors.Name}</small>
                </div>
              }

            </div>
            <div className="w-50 m-2 p-2">

              <b>Email address </b>
              <input type="Email address" className="form-control" placeholder="Email address" name="EmailAddress"{...formik.getFieldProps("EmailAddress")} />
              {
                <div className="text-danger">
                  <small>{formik.errors.EmailAddress}</small>
                </div>
              }
            </div>
            <div className="w-50 m-2 p-2">
              <b>Phone number</b>
              <input type="Phone number" className="form-control" placeholder="Phone number" name="PhoneNumber"{...formik.getFieldProps("PhoneNumber")} />
              {
                <div className="text-danger">
                  <small>{formik.errors.PhoneNumber}</small>
                </div>
              }
            </div>
            <div>
              <button className="btn btn-primary m-2 p-2">Send invitation</button>
            </div>

          </form>
        </div>

      </>


      )
}
      export default Refer;