import { FiAirplay } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillHome, AiFillRest, AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";

import { FiPlusCircle } from "react-icons/fi";
import {AiFillEdit } from "react-icons/ai";

import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { ToastContainer, toast } from 'react-toastify';
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import ReactTooltip from 'react-tooltip';
import { Dialog } from 'primereact/dialog';


const empurl="https://trinitstechnologies.com/demo/api/v1/employees";
export default function Employees(){
    

    const [employeemodel,setEmployeemodels]=useState([]);
    const [loading,setloading]=useState(true);
    const [showForm,setshowForm]=useState(false);
    const [selected,setSelected]=useState([]);
    const [card,setcard]=useState("");
  
    
   
    async function loadcompanydata(){
        axios.get(empurl)
	  .then(Response => {
		setEmployeemodels(Response.data);
       
		setloading(false);
	  })
	  .catch((error) => {
		setEmployeemodels([]);
		setloading(false);
	  });

        }

    function onsaveForm(model){ 
       
        setEmployeemodels((previousModels) =>   {
            let results= previousModels.slice();
          if(selected){
            const index = previousModels.findIndex(data => data.id == model.id);
            if(index){
                results.splice(index, 1, model);
                let compnayPromise = axios.put(empurl + selected.id , model);
                compnayPromise
                  .then((data) => {
                    toast.success("successfully updated.");
                  })
                  .catch((error) =>
                    toast.error("some error while updating the data" + error)
                  );
         
                    
        
            }

          }else{
            model.id=Math.random();
           results = previousModels.unshift(model);
           let compnayPromise = axios.post(empurl, model);
           compnayPromise
             .then((data) => {
             toast.success("successfully saved.");
             })
             .catch((error) =>
               toast.error("some error while saving the data" + error)
             );
          }
          return results;
    });
       setshowForm(false);
    }

   
    function onDeleteCompany(index){
      let value= window.confirm('Are you sure want to delete');
      if(value){
        let model = employeemodel[index];
        let url = empurl + "/" + model.id;
       
        axios
          .delete(url)
          .then( (data) => {
            toast.success("Successfully deleted");
          })
          .catch((error) => toast.error("some error form backend"+error));
  
         
        setEmployeemodels(previousModels =>{
            previousModels.splice(index,1);
            return previousModels.slice();
        });

      }  
     

    }
    function oneditCompany(employeemodel){
        setshowForm(true); 
       setSelected(Object.assign({},employeemodel));
        
    }
    function oncancelForm(){
        setshowForm(false);
    }
    
    useEffect(()=>{

        loadcompanydata();
    }, [])

    return(
    <>
      
       
      <ReactTooltip /> 
      <ToastContainer />

    {showForm ? <EmployeeForm  onCancel={oncancelForm} onSave={onsaveForm} selected={selected}/>:null}
       
        <div className="w-100 shadow p-4 text-white ">
        
        
        <div 
        className=' w-75 shadow  p-3 rounded mt-2 '>
        <Link to="/" > <AiFillHome className="font border border-white shadow rounded " /> Home </Link>
        <Link to="/Employees">/Employees</Link>
        <div  className=" float-end">
        <h4 className="text-info">Employees</h4>
             </div>
        
         
        </div>
       
       
        <div className="w-75 mt-2">
        
            <button className="button1 rounded p-2 button1:hover float-end shadow" onClick={ ()=>{ setshowForm(true);setSelected(null);}} data-tip="Add Employee Information"><FiPlusCircle /> AddEmployee</button>
        </div>
     
      
      <div className="w-75 flex mt-5">
      <div className="shadow w-50 rounded p-3 text-black">
      Total: {employeemodel.length}    
      </div>
      <div className="mt-2 ">
"
        <button className= {card == 'Card' ?" btn btn-primary p-2 shadow":"btn btn-outline-primary p-2 shadow "} data-tip="Card Data">< AiOutlineAppstore onClick={()=>setcard("Card")} className="font2 "/></button>
        <button className={card == 'table' ?"btn btn-primary p-2 ms-2 shadow":"btn btn-primary p-2 ms-2 shadow "} data-tip="Table Data"><AiOutlineBars onClick={()=>setcard("table")} className="font2"/> </button>
      </div>
      </div>
      <div className={card == 'Card' ? 'd-block':'d-none'}>
            {
                card == 'Card' ? <EmployeeCard /> : null
            }
            </div>

           

     
      <table className={card== 'table'?"table table-hover table-striped mt-4 w-75":'table table-hover table-striped shadow mt-4'}>
        <tbody>
            <tr>
                <th>empName</th>
                <th>empNo</th>
                <th>designation</th>
                <th>bankAccount</th>
                <th>pan</th>
                <th>doj</th>
                <th>Actions</th>
            </tr>
            {employeemodel.map((data,index)=>{
                return(
                    <tr key={data.id}>
                    <td>{data.empName}</td>
                    <td>{data.empNo}</td>
                    <td>{data.designation}</td>
                    <td>{data.bankAccount}</td>
                    <td>{data.pan}</td>
                    <td>{data.doj}</td>
                    <td>
                      
                        <button className="btn btn-outline-primary" onClick={()=>oneditCompany(employeemodel)} data-tip="Edit data" > <AiFillEdit className="font3"/> </button>
                        <button className="btn btn-outline-danger ms-2" onClick={()=>onDeleteCompany(index)} data-tip="Delete data "><AiFillRest  className="font3"/> </button>
                       <ReactTooltip />
                    </td>
                </tr>  
              
                )
            })}
            
            
        </tbody> 
        </table>   
     
      
        </div>
      
        </>
    )
}