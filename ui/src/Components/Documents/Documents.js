import { SelectButton } from "primereact/selectbutton";
import Joinletter from "../Offer Letter/offerletter";
import Payslip1 from "../Payslip1/Payslip1";
import Payslip2 from "../Payslip2/Payslip2";
import Payslip3 from "../Payslip3/Payslip3";
import "./../../App.css";
import { useState } from "react";
export default function Documents() {

      const [value3, setValue3] = useState(" ");
      const paySliparray = ["Payslip 1", "Payslip 2", "Payslip 3","Payslip 4"];
      return (
      <>
        <div className="border border-3 w-100 h-100 bg-primary bg-opacity-10 ">
          <div className="card ms-2 me-2 mt-3 bg-info bg-opacity-25 p-2">
            <h3 className="ms-4">Documents Page</h3>
          </div>
          <div className="m-5">
            <SelectButton
              value={value3}
              options={paySliparray}
              onChange={(e) => {
                setValue3(e.value);
              }}
            />
          </div>


          {value3 === "Payslip 1" && (
            <>
              <div>
                <Payslip1 />
              </div>
            </>
          )}

          {value3 === "Payslip 2" && (
            <>
              <div>
                <Payslip2 />
              </div>
            </>
          )}

          {value3 === "Payslip 3" && (
            <>
              <div>
                <Payslip3 />
              </div>
            </>
          )}

        </div>

      </>
      )
}
