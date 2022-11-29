import { BsCameraVideo, BsFileEarmarkBarGraph, BsHouseFill} from "react-icons/bs";

import { BsQuestionLg} from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { IoChevronForwardOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";


import "./Help.css";
import { Link } from "react-router-dom";



function Help() {
    return (<>
        <div className="card m-4 shadow ">
      <div className="card-body d-flex justify-content-between ">
        <div>
          <small className="fs-6">
            <button className="rounded shadow  me-2 border-none">
              <Link to="/home" className="text-decoration-none ">
                <BsHouseFill />
              </Link>
            </button>
            <Link to="/home" className="text-decoration-none text-dark me-1">
              Home
            </Link>
            / Help
          </small>
        </div>
        <div>
            <h5>Help</h5>
          </div>
        </div>
        </div>
      
          <div className="widthdata card ms-4 ">
            <div className=" card  border">
                <div className="card-header"><h3>Get Help</h3></div>
                <h4 className="p-2 text-danger"> Quick Links</h4>
                <div className="d-flex bd-highlight mb-3 p-2">
                  <div className=""> <BsFileEarmarkBarGraph className="fs-5" /> payroll management Account Setup Guide </div>
                    <div className=" ff" > <BsFileEarmarkBarGraph className="fs-5" /> How do I a custom salary structure?</div> 
                  
                </div>
                <div className="d-flex bd-highlight mb-3 p-2">
                    <div className="" > <BsFileEarmarkBarGraph className="fs-5" /> Checklist before you excute your next payroll</div>
                    <div className=" ee"> <BsFileEarmarkBarGraph className="fs-5" /> How do we register our employees for PF?</div>
                </div>
                <div className="d-flex bd-highlight mb-3 p-2">
                    < div className=""> <BsFileEarmarkBarGraph className="fs-5" />Employee training guide</div>
                    <div className="dd "> <BsFileEarmarkBarGraph className="fs-5" /> How do I create one-time payment?</div>
                </div>
                <div className="d-flex bd-highlight mb-3 p-2">
                    <div className=""><BsFileEarmarkBarGraph className="fs-5" />  When will payroll pay my TDS/PF/ESI/PT dues?</div>
                    <div className="cc " > <BsFileEarmarkBarGraph className="fs-5" /> How do I pay Reimbursement to on Employee?</div>
                </div>

                <div><h4 className="p-2  text-danger">Help Videos</h4></div>
                <div className="d-flex bd-highlight mb-3 p-1">
                    <div className="p-1"> <BsCameraVideo  className="fs-5"/> Excuting a payroll</div>
                    <div className="aa"> <BsCameraVideo  className="fs-5"/> payroll-User Access</div>

                </div>
                <div className="d-flex bd-highlight mb-3 p-2">
                    <div className="">  <BsCameraVideo  className="fs-5"/> Controctor payment</div>
                    <div className="bb"> <BsCameraVideo  className="fs-5"/> How to pay and recover a Salary Advance?</div>
                </div>
                <div className="p-2"> <BsCameraVideo  className="fs-5"/> Time,Attendance & Leave</div>

                <div className="text-primary p-2"><b>Search help for more articles <IoChevronForwardOutline className="fs-5" /></b></div>

            </div>
          
            {/* <div className="">
                <button className="btn btn-success"><SlSupport className="fs-2 p-1 " /><a href="mailto:support@trinitstechnologies.com"> Support As</a> </button>
              
            </div> */}
           

        </div>
        </>
    )
}
export default Help;