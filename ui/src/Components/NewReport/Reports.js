import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import { Link } from "react-router-dom";
import OfferLetter from "../Documents/Appointment";
import Joinletter from "../Offer Letter/offerletter";
import Payslip1 from "../Payslip1/Payslip1";
import Payslip2 from "../Payslip2/Payslip2";
import Payslip3 from "../Payslip3/Payslip3";
import Report from "../Report/Report";

export default function Reports() {
  const [value2, setValue2] = useState("Offer Letter");
  const reportsOptions = [
    "Payslip'S",
    "Offer Letter",
    "Joining Letter",
    "Appointment Letter",
    "Basic detalies",
  ];
  const [value3, setValue3] = useState("Offer Letter");
  const paySliparray = ["Payslip1", "Payslip2", "Payslip3"];

  return (
    <>
      <div className=" over-flow-auto bg-success bg-opacity-10 border border-3 rounded m-4">
        <div className="card p-2 mt-3 ms-3 me-3 m-5 m-auto border border-3 bg-primary bg-opacity-25">
          <h3 className=" ms-4 fw-bold">Reports</h3>
        </div>
        <div className="m-5">
          <h4 className="mb-4 text-primary">Select Report</h4>
          <SelectButton
            value={value2}
            options={reportsOptions}
            onChange={(e) => {
              setValue2(e.value);
            }}
          />
          {value2 === "Payslip'S" && (
            <>
              <div className="mt-5">
               <div> <SelectButton
                  value={value3}
                  options={paySliparray}
                  onChange={(e) => {
                    setValue3(e.value);
                  }}
                  
                />
                </div>
              </div>
            </>
          )}
        </div>

        {value2 === "Offer Letter" && (
          <>
            <div>
              <Joinletter />
            </div>
          </>
        )}

        {value2 === "Appointment Letter" && (
          <>
            <div>
              <OfferLetter />
            </div>
          </>
        )}

        {value2 === "Basic detalies" && (
          <>
            <div>
              <Report />
            </div>
          </>
        )}

        {value2 === "Payslip'S" && (
          <>
            {value3 === "Payslip1" && (
              <>
                <div>
                  <Payslip1 />{" "}
                </div>
              </>
            )}

            {value3 === "Payslip2" && (
              <>
                <div>
                  <Payslip2 />
                </div>
              </>
            )}

            {value3 === "Payslip3" && (
              <>
                <div>
                  <Payslip3 />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
