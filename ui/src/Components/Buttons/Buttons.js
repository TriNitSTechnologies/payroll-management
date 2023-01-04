import './Buttons.css';
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import { BsHouseFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import Report from "../Report/Report";
import { useDispatch } from 'react-redux';
import { appointment } from '../Store/AppointmentSlice';
import Appointment from '../Documents/Appointment';
import { offerletterReducer } from '../Store/Offer-LetterSlice';
import OfferLetter from '../Appointment/OfferLetter';
import { Button } from 'bootstrap';
import Relievingletter from '../Documents/Relievingletter/Relievingletter';
import relivingletterReduces, { relievingSlices } from '../Store/RelievingSlice';

export default function Buttons() {
  const [value2, setValue2] = useState("");
  const history = useHistory();
  
  const reportsOptions = [
    "Offer-Letter",
    "Appointment Letter",
    "Relievingletter",
     "Payslips",

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


  function Appoiementdata(data1){
    let obj1={
      selectedPage:value2,
      fromObj: data1
    }
    dispatch(appointment(obj1))
    history.push('./documents')
  }


  function Relievingletters(data2){
    console.log("test " + JSON.stringify(data2))
    let obj2={
      selectedPage:value2,
      fromObj: data2
    }
    dispatch(relievingSlices(obj2))
    history.push('./reliving')
  }

return (
    <>
      <div className="h-over-flow-auto border butt border-2 rounded m-4">
    
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
             <Appointment Appdata={Appoiementdata}  />

            </div>
          </>
        )}
         {value2 === "Relievingletter" && (
          <>
            <div>
             <Relievingletter Relievingletters={Relievingletters}  />

            </div>
          </>
        )}
        

      
         {value2 === "Payslips" && (
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
