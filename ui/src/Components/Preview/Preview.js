import "./Preview.css";

function Preview() {
  return (
    <div>
      <div className=" border p-4 shadow m-auto mt-4 mb-4 rounded height ">
        <div className="mb-2 ms-2 fw-black">Offer Letter| <small className="fw-semibold">Salary Preview</small></div>
        <h2 className="fw-bold ms-2 ">Salary Preview</h2>

        <div className="w-75 fw-black  p-4 shadow m-auto mt-4 mb-4 rounded ht  ms-1">
          <div className="d-flex">
            <div className="">
              <h3>Salary breakup</h3>

              <div class="border p-3 mb-4 rounded d-flex justify-content-between">
                <div>Salary Component</div>
                <div className="ms-3 ">Amount</div>
              </div>

              <div class="border p-3 mb-4 rounded d-flex justify-content-between ">
                <div>Basic Salary</div>
                <div className="float-end">5,000</div>
              </div>

              <div class="border p-3 mb-4 rounded d-flex justify-content-between">
                <div>HRA</div>
                <div className="ms-3">2,500</div>
              </div>

              <div class="border p-3 mb-4 rounded  d-flex justify-content-between ">
                <div>Special Allowance</div>
                <div className="ms-3">1,500</div>
              </div>

              <div class="border p-3 mb-4 rounded d-flex justify-content-between">
                <div>Leave & Travel Allowance</div>
                <div className="ms-3">1,000</div>
              </div>

              <div class="border p-3 mb-4 rounded d-flex justify-content-between ">
                <div>Total</div>
                <div className="ms-3">10,000</div>
              </div>
            </div>

            <div className="ms-5">

             <h3> Deducations</h3>
              <div class="border p-3 mb-4 rounded d-flex justify-content-between">
                <div>Deducation</div>
                <div className="ms-3">Amount</div>
              </div>
              <div class="border p-3 mb-4 rounded d-flex justify-content-between ">
                <div>TDS (estimate)*</div>
                <div className="ms-3">0</div>
              </div>
              <div class="border p-3  mb-4 rounded d-flex justify-content-between">
                <div>Total</div>
                <div className="ms-3">0</div>
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

            <button className="btn btn-primary">Go back</button>
         </div>
      </div>
      </div>
    </div>
  );
}

export default Preview;
