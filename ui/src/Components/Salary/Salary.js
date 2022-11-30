import { useFormik } from "formik";
import './Salary.css'
function validate(values) {
  const errors = {};


  if (!values.Annual) {
    errors.Annual = "Annual CTC is required";
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
      <div className="text-black border p-4 shadow m-auto mt-4 mb-4 rounded w-75 bg-white">
      <form onSubmit={formik.handleSubmit}>
        <div>offer letter|<small className="fw-semibold ms-1">Salary preview</small></div>

        <h2 className="mt-3 fw-black">Salary preview</h2>

        <div>
          <p className="mt-4">
            Using this tool,you can generate the salary structure,and see an
            employee's in-hand<br />
            salary by entering a few Details below.
          </p>
         

          <p className="mt-3">
            if there are any deductons (like medical insurance) that are to be
            automatically added,<br />then please specify them below.
          </p>
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
            <button className="btn btn-primary">CALCULATE SALARY</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Salary;
