import "./Preview.css";

function Preview() {
  return (
    <div>
      <div className=" border p-4 shadow m-auto mt-4 mb-4 rounded height ">
        <div className="mb-2 ms-2 fw-black">Offer Letter| <small className="fw-semibold">Salary Preview</small></div>
        <h2 className="fw-bold ms-2 ">Salary Preview</h2>

        <div className="w-75 fw-black  p-4 shadow m-auto mt-4 mb-4 rounded ht  ms-1">
          <div className="d-flex">
            <div>
              <h3>Salary breakup</h3>

              <div class="shadow p-3 mb-4 rounded">
                <span>Salary Component</span>
                <span className="ms-3">Amount</span>
              </div>

              <div class="shadow p-3 mb-4 rounded">
                <span>Basic Salary</span>
                <span className="ms-3">5,000</span>
              </div>

              <div class="shadow p-3 mb-4 rounded">
                <span>HRA</span>
                <span className="ms-3">2,500</span>
              </div>

              <div class="shadow p-3 mb-4 rounded">
                <span>Special Allowance</span>
                <span className="ms-3">1,500</span>
              </div>

              <div class="shadow p-3 mb-4 rounded">
                <span>Leave & Travel Allowance</span>
                <span className="ms-3">1,000</span>
              </div>

              <div class="shadow p-3 mb-4 rounded">
                <span>Total</span>
                <span className="ms-3">10,000</span>
              </div>
            </div>

            <div className="ms-5">

             <h3> Deducations</h3>
              <div class="shadow p-3 mb-4 rounded">
                <span>Deducation</span>
                <span className="ms-3">Amount</span>
              </div>
              <div class="shadow p-3 mb-4 rounded">
                <span>TDS (estimate)*</span>
                <span className="ms-3">0</span>
              </div>
              <div class="shadow p-3  mb-4 rounded">
                <span>Total</span>
                <span className="ms-3">0</span>
              </div>
            </div>
          </div>
        </div>
            
            <div className="fw-black">
       <div className="mb-3">
        <small className="fw-semibold">
            Estimated taxable income at the end of FY:0
        </small>
        <div>
        <small className="fw-semibold">Estimated monthly in-hand salary:10,000</small>
        </div>
       </div>
         
         <small>* Estimated taxable tax, assuming 01/11/2022 as the hiring date, and zero post income. actual</small>
         <div>
            <small>TDS might be different, depending on employee's joining date, past income, tax</small>
         </div>
         <div>
            <small>
                declaration etc. this calclations assume the old tax regime.
            </small>
         </div>

         <div className="mt-2">

            <button className="btn btn-primary ">Go back</button>
         </div>
      </div>
      </div>
    </div>
  );
}

export default Preview;
