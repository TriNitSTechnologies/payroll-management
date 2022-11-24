import { AiFillEdit, AiFillRest } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import photo from "../Image/pexels-photo.jpeg";

const url = 'https://trinitstechnologies.com/demo/api/v1/employees';


export default function EmployeeCard({ data, ondelete, onedit, index }) {






  return (
    <>
     <ReactTooltip />
      <div className="card cardsize  employeehover cardhover m-4 rounded  shadow text p-2">

        <div className="card-body ">
          <div>
            <img src={photo} alt="circle" className="rounded-circle imagesize2 me-2 font1" />

          </div>
          <div className="d-flex  justify-content-around">
            <div className=" titlecolor ">{data.empName}</div>
            <div className=" titlecolor "> {data.empNo}</div>
          </div>
          <div className="d-flex justify-content-around ">
            <div className=" titlecolor "> {data.pan}</div>
            <div className=" titlecolor "> {data.doj}</div>
          </div>
          <div className=" bodycolor text-center"> {data.designation}</div>
          <div className=" bodycolor text-center"> {data.bankAccount}</div>

        </div>
        <div className="font1">
         
          <button className="btn btn-outline-primary  employee ms-3" onClick={() => onedit(data)} data-tip="Edit Employee"><AiFillEdit className="font3" /></button>
          <button className="btn btn-outline-danger ms-3 employee" onClick={() => ondelete(index)} data-tip="Delete Employee "><AiFillRest className="font3" /></button>
        </div>
      </div>


    </>
  )
}
