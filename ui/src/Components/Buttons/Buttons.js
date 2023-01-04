import './Buttons.css';
import { SelectButton } from "primereact/selectbutton";
import { BsHouseFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import Report from "../Report/Report";

import { Button } from 'bootstrap';
import Appraisal from '../Appraisal-Form/Appraisal-form';
import { useDispatch } from 'react-redux';
import { AppraisalStatus } from '../Store/AppraisalSlice';

  
 
 
   


import { appointment } from '../Store/AppointmentSlice';
import Appointment from '../Documents/Appointment';
import { offerletterReducer } from '../Store/Offer-LetterSlice';
import OfferLetter from '../Appointment/OfferLetter';
 Reliving-letter
import { Button } from 'bootstrap';
import Relievingletter from '../Documents/Relievingletter/Relievingletter';
import relivingletterReduces, { relievingSlices } from '../Store/RelievingSlice';


import { useState } from 'react';

export default function Buttons() {
  const [value2, setValue2] = useState("Offer-Letter");
  const history = useHistory();
 const reportsOptions = [
    "Offer-Letter",
    "Appointment Letter",
 Reliving-letter
    "Relievingletter",
     "Payslips",


    "Payslips",
    "Appraisal"

  ];
  const dispatch = useDispatch();
  function OfferLetterData(data) {

    let obj = {
      selectedPage: value2,
      formObj: data
    }
  dispatch(offerletterReducer(obj))
  history.push("./documents")

  }

  function appraisalForm(data){
    let obj = {
      selectedPage: value2,
      formObj: data
    }

    dispatch(AppraisalStatus(obj))
    alert(JSON.stringify('obj'))
    history.push('./appdocument')
  }
  function Appoiementdata(data1) {
    let obj1 = {
      selectedPage: value2,
      fromObj: data1
    }
    dispatch(appointment(obj1))
    history.push('./documents')
  }

 Reliving-letter

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
      <div className="h-over-flow-auto border butt border-2 rounded m-2">

        <div className="card m-4 pay shadow ">
          <div className="card-body d-flex justify-content-between ">
            <div>
              <small className="fs-6">
                <button className="rounded shadow back me-2 ">
                  <Link to="/home" className="text-decoration-none back">
                    <BsHouseFill /></Link>
            
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

      </div>
      <div className="m-4 from-control">
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
              <OfferLetter OfferLetter={OfferLetterData} />
            </div>

          </>
        )}
 Reliving-letter
         {value2 === "Relievingletter" && (
          <>
            <div>
             <Relievingletter Relievingletters={Relievingletters}  />

            </div>
          </>
        )}
        



        {value2 === "Appraisal" &&(
          <>
            <div>
                <Appraisal appraisalForm={appraisalForm}/>
            </div>
          </>
        )}


        </div>
    
   

     


      {value2 === "Appointment Letter" && (
        <>
          <div>
            <Appointment Appdata={Appoiementdata} />

          </div>
        </>
      )}
      {value2 === "Payslips" && (
        <>
          <div>
            <Report DataTransfer={DataTransfer} />
          </div>
        </>
      )}
</>
  );
}



