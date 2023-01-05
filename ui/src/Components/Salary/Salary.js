import { useFormik } from "formik";
import './Salary.css'
function validate(values) {
  const errors = {};


  if (!values.Annual) {
    errors.Annual = "annualCTC is required";
  }

  return errors;

}




function Salary() {
  const formik = useFormik({
    initialValues: {
      AnnualCTC: "",

    },

    validate,
    onSubmit: (value) => {
      alert(JSON.stringify(value));
    },
  });
  return (
    <div className="p-6">
      <div className="text-black border p-4 shadow m-auto mt-4 mb-4 rounded ht bg">
      <form onSubmit={formik.handleSubmit}>
        <div>offer letter|Salary preview</div>

        <h2 className="mt-3 fw-black">Salary preview</h2>

        <div>
          <p className="mt-4">
            Using this tool,you can generate the salary structure,and see an
            employee's in-hand
          </p>
          <small className="mb-4">
            {" "}
            salary by entering a few Details below.
          </small>

          <p className="mt-3">
            if there are any deductons (like medical insurance) that are to be
            automatically added,
          </p>
          <small> then please specify them below.</small>
        </div>

        <div className="mt-4 mb-2">Annual CTC</div>
        <input className="form-control w-75"
              id="Annual CTC"
              name="Annual CTC"
              value={formik.values.Annual}
              onChange={formik.handleChange}
              
              />
               <div>
                  <small className="text-danger">{formik.errors.Annual}</small>
                </div>


        <div className="mt-4">
            <button className="btn btn-outline-primary">CALCULATE SALARY</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Salary;
