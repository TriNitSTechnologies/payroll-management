import { AiFillEdit, AiFillRest } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import photo from "../Image/pexels-photo.jpeg";

const url = 'https://trinitstechnologies.com/demo/api/v1/employees';


export default function EmployeeCard({ data, ondelete, onedit, index }) {






  return (
    <>
      <div className="card cardsize ccolor m-4 rounded  text shadow text p-2">

        <div className="card-body ">
          <div>
            <img src={photo} alt="circle" className="rounded-circle imagesize2 me-2 font1" />

          </div>
          <div className="d-flex mt-2">
            <div className=" titlecolor ms-5">{data.empName}</div>
            <div className=" titlecolor ms-5"> {data.empNo}</div>
          </div>
          <div className="d-flex">
            <div className=" titlecolor ms-5"> {data.pan}</div>
            <div className=" titlecolor ms-4"> {data.doj}</div>
          </div>
          <div className=" bodycolor text-center"> {data.designation}</div>
          <div className=" bodycolor text-center"> {data.bankAccount}</div>

        </div>
        <div>
          <ReactTooltip />
          <button className="btn btn-outline-primary font1" onClick={() => onedit(data)} data-tip="Edit Employee"><AiFillEdit className="font3" /></button>
          <button className="btn btn-outline-danger ms-2 " onClick={() => ondelete(index)} data-tip="Delete Employee "><AiFillRest className="font3" /></button>
        </div>
      </div>


    </>
  )
}
