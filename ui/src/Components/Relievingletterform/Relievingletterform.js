

import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./Relievingletterform.css";


export default function Relievingletterform(props) {

  let Relivingletterdata = props.Relivingletterdata;
  console.log("Relivingletterdata " + JSON.stringify(Relivingletterdata))
  const componentRef = useRef();
  const [style, setStyle] = useState(false);
  const handlePrint = useReactToPrint({
    content: () => {
      let newClass = document.getElementById("Relievingletter").classList;
      newClass.add("w-100");
      setStyle(true);
      return componentRef.current;
    },

    documentTitle: "reliving-data",
  });
  useEffect(() => {
    let newClass = document.getElementById("Relievingletter").classList;
    newClass.remove("w-100");
    setStyle(false);
  }, [style])
  return (

    <>
      <div>
        <button
          className="btn btn-primary"
          onClick={handlePrint}
        >
          Print letter
        </button>
      </div>
      <div
        ref={componentRef}
        style={{ width: "100%",height: window.innerHeight  }}
      >
        <div
          id="Relievingletter"
          className="bg-white w-75 m-auto shadow border p-3 reliving"
        >

         
            <div className="border-bottom p-3">
              <div className="">
                <h5 className="text-end me-3"><b>{Relivingletterdata.CompanyName}</b>  Private Limited</h5>


                <h6 className="text-end me-3">No. 6-2-204, Naidupeta, Andhra Pradesh, India -
                  <b>{Relivingletterdata.CompanyAddress}</b>
                 </h6>


                <h6 className="text-end me-3 ">524421, Andhra Pradesh, 524421</h6>
              </div>
            </div>

            <div className="float-end me-5 mt-3 ">
              <b>{Relivingletterdata.CurrentData}</b>
            </div>

            <div className="mt-5 fs-2 text-center"><b>Relieving letter</b></div>
            <div className="p-5">
              <p>Dear <b>{Relivingletterdata.EmployeeName}</b></p>
              <div>
                <p>
                  With reference to your resignation email dated <b>{Relivingletterdata.EmployeeResignationData}</b>, you are hereby relieved from your duties as on <b>{Relivingletterdata.Employeerelievingdata}</b>. We confirm that you have been working with TriNitS Technologies Private Limited, as Software engineer from 15-11-
                  2022 to <b>{Relivingletterdata.Employeejoiningdata}</b>

                </p>

              </div>
              <div>
                <p>
                  We would like to thank you for your service with TriNitS Technologies Private Limited & wish you the best in your future
                  endeavours.
                </p>
              </div>
              <div>
                <p>
                  For <b>{Relivingletterdata. Employeedesignation}</b>
                </p>
              </div>
              <div>
                <b>
                {Relivingletterdata.HRname}
                  
                </b>
              </div>
              <div>
                <b>
                {Relivingletterdata.HRdesignation}
                </b>
              </div>

            </div>
          </div>
        </div>
     

    </>
  )
}