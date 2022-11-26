import './Buttons.css';
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import { BsHouseFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import Report from "../Report/Report";
import OfferLetter from '../Documents/Appointment';
import { useDispatch } from 'react-redux';
import { offerletterReducer } from '../Store/Offer-LetterSlice';
import { Button } from 'bootstrap';

export default function Buttons() {
  const [value2, setValue2] = useState("");
  const history = useHistory();
  
  const reportsOptions = [
    "Offer-Letter",
    "Appointment Letter",
     "PayslipS",
  ];
  const dispatch = useDispatch();
 function OfferLetterData(data){
    let obj = {
      selectedPage: value2,
      formObj: data
    }
    dispatch(offerletterReducer(obj))
    history.push("./documents")
  }
return (
    <>
      <div className="  h-over-flow-auto border butt border-3 rounded m-4">
    
     <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">
              <button className="rounded shadow back me-2 ">
                <Link to="/home" className="text-decoration-none back">
                  <BsHouseFill />
                </Link>
              </button>
              <Link to="/home" className="text-decoration-none text-dark me-1">
                Home
              </Link>
               / Reports
            </small>
          </div>
          <div>
            <h5> Reports</h5>
          </div>
        </div>
      </div>
        <div className="m-5 from-control">
          <SelectButton
            value={value2}
            options={reportsOptions}
            onChange={(e) => {
              setValue2(e.value);
            }}
          />
           {value2 === "Offer-Letter" && (
            <>
             <div>
            <OfferLetter  OfferLetter={OfferLetterData} />
             </div>
            </>
          )}
        </div>
     

        {value2 === "Appointment Letter" && (
          <>
            <div>
             
            </div>
          </>
        )}
        

      
         {value2 === "PayslipS" && (
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
