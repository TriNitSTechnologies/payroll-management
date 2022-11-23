import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Upload() {
  return (
    <>
      <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">
              <button className="rounded shadow back me-2 ">
                <Link to="/" className="text-decoration-none back">
                  <BsHouseFill />
                </Link>
              </button>
              <Link to="/" className="text-decoration-none text-dark me-1">
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
        <div className="card w-50 h-75 m-4 ">
          <div className="card-header">
            <h4>Documents</h4>
          </div>
          <div className="card-body w-100 h-100">
            <form>
              <div> Upload new documents(* is mandatory)</div>
              <select
                className="form-select mt-3 p-3"
                aria-label="Default select example"
              >
                <option value="1">Please pick a type</option>
                <option value="2">Professional Documents</option>
                <option value="3">Degree*</option>
                <option value="4">Aadhaar*</option>
                <option value="5">Tax Deductions Supporting Documents</option>
                <option value="6">Employment Contract</option>
                <option value="7">Previous Employment Documents </option>
                <option value="8"> Bank Account Details</option>
                <option value="9">Other</option>
                <option value="10">Common Organization Documents</option>
              </select>
              <div>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label mt-3 "
                >
                  Description?
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg p-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="w-75">
                <label htmlFor="formFileLg" className="form-label mt-3 ">
                  images or documents (maximum 5 MB each)*
                </label>
                <input
                  className="form-control form-control-lg p-2 "
                  id="formFileLg"
                  type="file"
                />
              </div>
              <div className="w-75 mt-4">
                <button type="button" class="btn btn-primary btn-lg">
                  UPLOAD DOCUMENT(S)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
