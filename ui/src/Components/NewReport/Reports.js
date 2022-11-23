import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import Appointment from "../Appointment/appointment";
import OfferLetter from "../Documents/Appointment";
import PrintAppoiement from "../Letter of Appoiement/APPOIEMENT.print";
import Report from "../Report/Report";

export default function Reports() {
  const [value2, setValue2] = useState("Offer Letter");
  const reportsOptions = [
    "Payslip'S",
    "Offer-Letter",
    "Joining Letter",
    "Appointment Letter",
  ];


  function DataTransfer(data){
    let obj = {
      selectedPage: value2,
      formObj: data
    }
    alert(JSON.stringify(obj))
  }

  
  return (
    <>
      <div className="  h-over-flow-auto bg-success bg-opacity-10 border border-3 rounded m-4">
        <div className="card p-2 mt-3 ms-3 me-3 m-5 m-auto border border-3 bg-primary bg-opacity-25">
          <h3 className=" ms-4 fw-bold ">Report's-Page</h3>
        </div>
        <div className="m-5 from-control">
          <SelectButton
            value={value2}
            options={reportsOptions}
            onChange={(e) => {
              setValue2(e.value);
            }}
          />
           {value2 === "Payslip'S" && (
            <>
             
            </>
          )}
        </div>

        {value2 === "Offer-Letter" && (
          <>
            <div>
              <OfferLetter DataTransfer={DataTransfer} />
            </div>
          </>
        )}

        {value2 === "Appointment Letter" && (
          <>
            <div>
              <Appointment DataTransfer={DataTransfer}/>
            </div>
          </>
        )}
         {value2 === "Joining Letter" && (
          <>
            <div>
              <PrintAppoiement />
            </div>
          </>
        )}

       

        {value2 === "Payslip'S" && (
          
          <>
           <div>
              <Report DataTransfer={DataTransfer}/>
            </div>
           
          </>
        )}
      </div>
    </>
  );
}
