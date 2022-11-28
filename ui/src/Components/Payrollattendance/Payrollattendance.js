import { useState } from "react";

import { AiFillEdit } from "react-icons/ai";

import PayRollAttendenseForm from "../PayrollAttendanceForm/PayrollAttandanceForm";
import axios from "axios";
import { toast } from "react-toastify";
import ReactTooltip from 'react-tooltip'
export default function Payrollattendance() {
    const [attendance,setAttendanse]= useState(false);

    function closeHandler(){
        setAttendanse(false);

    }

    // function getAttendance(){
    //     axios.get().then(response =>{
    //         setAttendanse(response.data);
            

    //     }).catch((error) =>{
    //         alert("error occured")
    //     })
    // }
    // getAttendance();

    function deleteAttendanse(){
        setAttendanse(false);
        toast.success("Sucessfully deleted !", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }


    if(attendance){
        return(
            <PayRollAttendenseForm cancel={closeHandler} Ondelete={deleteAttendanse}/>
        )
    }
  
    return (
        

        <div className=" m-4 ">
            <ReactTooltip />
            <table className="table table-hover text rounded shadow">
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Duration</th>
                        <th>Remarks</th>
                        <th>Edit</th>
                    </tr>
                    <tr>
                        <td>1-12-2022</td>
                        <td>Present</td>
                        <td>09:00</td>
                        <td>19:00</td>
                        <td>10:00</td>
                        <td>-NA-</td>
                        <td><button className=" btn btn-outline-primary ms-4" onClick={() =>{setAttendanse(true)}} data-tip="update"><AiFillEdit className="font3" /></button></td>
                    </tr>
                    <tr>
                        <td>2-12-2022</td>
                        <td>Present</td>
                        <td>09:00</td>
                        <td>19:00</td>
                        <td>10:00</td>
                        <td>-NA-</td>
                        <td><button className=" btn btn-outline-primary ms-4" onClick={() =>{setAttendanse(true)}} data-tip="update"><AiFillEdit className="font3" /></button></td>
                    </tr>
                    <tr>
                        <td>3-12-2022</td>
                        <td>Present</td>
                        <td>09:00</td>
                        <td>19:00</td>
                        <td>10:00</td>
                        <td>-NA-</td>
                        <td><button className=" btn btn-outline-primary ms-4" onClick={() =>{setAttendanse(true)}} data-tip="update"><AiFillEdit className="font3" /></button></td>
                    </tr>
                    <tr>
                        <td>4-12-2022</td>
                        <td>Present</td>
                        <td>09:00</td>
                        <td>19:00</td>
                        <td>10:00</td>
                        <td>-NA-</td>
                        <td><button className=" btn btn-outline-primary ms-4" onClick={() =>{setAttendanse(true)}} data-tip="update"><AiFillEdit className="font3" /></button></td>
                    </tr>
                    <tr>
                        <td>5-12-2022</td>
                        <td>Present</td>
                        <td>09:00</td>
                        <td>19:00</td>
                        <td>10:00</td>
                        <td>-NA-</td>
                        <td><button className=" btn btn-outline-primary ms-4" onClick={() =>{setAttendanse(true)}} data-tip="update"><AiFillEdit className="font3" /></button></td>
                    </tr>

                    <tr>
                        <td>6-12-2022</td>
                        <td colSpan="5" className="text-center"><b>Weekend</b></td>

                        <td><button className=" btn btn-outline-primary ms-4 " onClick={()=>setAttendanse(true)} data-tip="update"><AiFillEdit className="font3" /></button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
