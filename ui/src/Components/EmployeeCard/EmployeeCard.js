import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa"
const url='https://trinitstechnologies.com/demo/api/v1/employees';


export default function EmployeeCard(){
 const[load,setload]=useState([]);
 
 function getdata(){
  axios.get(url).then(response => {
      setload(response.data);
  }).catch(error => {
      alert("error in loading") ;
  })
}
 useEffect(()=>{
    getdata();
 },[])

 




  return(
    <>
        <div className="d-flex flex-row flex-wrap border shadow mt-4 ">
          {
          load.map(data => {
            return (
              <div key={data.id} className="card cardsize card:hover m-4 shadow">
                
                 <div className="card-body">
                  <div>
                 <FaUserFriends className="font1 "/>  
                 
                  </div>     
                  <div className="  text-center titlecolor mt-2 ">{data.empName}</div>
                <div className="text-center text-dark"> <small >{data.empNo}</small></div>
                <div className="text-center bodycolor"> <small>{data.designation}</small></div>
               
              
              </div>
              
              </div>
            );
          })
          }
         
      </div>
        </>
    )
}
