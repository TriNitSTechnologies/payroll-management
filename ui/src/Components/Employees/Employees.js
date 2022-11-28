
import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AiFillHome, AiFillRest, AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";

import { FiPlusCircle } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";

import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { ToastContainer, toast } from 'react-toastify';
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import ReactTooltip from 'react-tooltip';
import photo from "../Image/pexels-photo.jpeg";
import { FaOdnoklassniki, FaSpinner } from "react-icons/fa";

import { ConfirmDialog } from 'primereact/confirmdialog';
import { CircleLoader } from "react-spinners";
import { BsHouseFill } from "react-icons/bs";


const empurl = "https://trinitstechnologies.com/demo/api/v1/employees";
export default function Employees() {


  const [employeemodel, setEmployeemodels] = useState([]);
  const [loading, setloading] = useState(true);
  const [showForm, setshowForm] = useState(false);
  const [card, setcard] = useState("table");
  const [selected, setSelected] = useState({
    empName: '',
    empNo: '',
    designation: '',
    bankAccount: '',
    pan: '',
    doj: ''
  });
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();






  async function loadEmployeedata() {
    axios.get(empurl)
      .then(Response => {
        setEmployeemodels(Response.data);

        setloading(false);
      })
      .catch((error) => {
        setEmployeemodels([]);
        setloading(false);
        toast.error("error occered in backend",
        {
          position: toast.POSITION.BOTTOM_LEFT
        });
        
      });

  }



  function onDeleteFunction() {
    let model = employeemodel[selectedIndex];

    if (model) {
      let url = empurl + "/" + model.id;
      axios.delete(url)
        .then((data) => {
          toast.success("Successfully deleted",
            {
              position: toast.POSITION.BOTTOM_LEFT
            });
        }).catch((error) => toast.error("some error form backend" + error),
          {
            position: toast.POSITION.BOTTOM_LEFT
          });

      setEmployeemodels(previousModels => {
        previousModels.splice(selectedIndex, 1);
        return previousModels.slice();
      });
    }

  }



  function oneditEmployee(employeemodel) {
    setshowForm(true);
    setSelected(Object.assign({}, employeemodel));


  }
  function oncancelForm() {
    setshowForm(false);
   
  }

  useEffect(() => {

    loadEmployeedata();


  }, [])

  if (loading) {
    return (
      <div className="load ">
        <b> Loading Employee data.....
          <CircleLoader color="blue" />
        </b>
      </div>
    )
  }

  function handleevent() {
    setshowForm(false);
    loadEmployeedata();
  }

  function showDeleteDialog(index) {
    setVisible(true);
    setSelectedIndex(index)
  }

  function addEmployee() {
    setshowForm(true);
    setSelected({
      empName: '',
      empNo: '',
      designation: '',
      bankAccount: '',
      pan: '',
      doj: ''
    })
  }

  if (showForm) {
    return (

      <EmployeeForm onCancel={oncancelForm} onaddeddata={handleevent} initialValues={selected} />
    )
  }


  return (
    <>
      <ReactTooltip />
      <ToastContainer />
      <div className="card">

        <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to Delete?"
          header="Delete Employees" icon="pi pi-exclamation-triangle" acceptClassName='p-button-danger' accept={onDeleteFunction} />

      </div>
      <div className="w-100 shadow p-4 ">


        <div className=' w-100 shadow  p-3 rounded mt-2 text'>
        <button className="rounded shadow back me-2 ">
                <Link to="/home" className="text-decoration-none back">
                  <BsHouseFill />
                </Link>
              </button>

          <Link to="/home" className="text-decoration-none text-dark ">  Home </Link>/Employees

          <div className="float-end">
            <h4 className="text-dark">Employees</h4>
          </div>

        </div>

        <div className="w-100 flex  mt-3 ">
          <div className="shadow w-75 rounded text-dark text p-4 ">
            <b> Total: {employeemodel.length}</b>
          </div>
          <div >

            <button className="button1 rounded p-2 button2 mt-3" onClick={() => { addEmployee() }} data-tip="Add Employee"><FiPlusCircle /> AddEmployee</button>
          </div>
          <div className="mt-2 p-2">

            <button className={card == 'Card' ? " btn btn-primary p-2 " : "btn btn-outline-primary p-2"} data-tip="Card view" >< AiOutlineAppstore onClick={() => setcard("Card")} className="font2 " /></button>
            <button className={card == 'table' ? "btn btn-primary p-2 ms-1" : "btn btn-outline-primary p-2 ms-1"} data-tip="Table view"><AiOutlineBars onClick={() => setcard("table")} className="font2" /> </button>
          </div>
        </div>
        <div className={card == 'Card' ? "d-block" : 'd-none'}>

          <div className="d-flex flex-row flex-wrap  border shadow mt-4 rounded p-4 ">
            {

              employeemodel.map((data, index) => {
                return (
                  <EmployeeCard key={data.id} index={index} data={data} ondelete={showDeleteDialog} onedit={oneditEmployee} />

                )
              })


            }
          </div>
        </div>



        <div className="overflow-auto " >
        
          <table className={card == 'table' ? "table table-hover mt-4 rounded text " : "d-none"}>
          
            <tbody>
           
              <tr className="text-dark summerysize "><b>Employees</b></tr>
              <tr>
                <th>Emp Name</th>
                <th>EmpNo</th>
                <th>Designation</th>
                <th>BankAccount</th>
                <th>Pan</th>
                <th>Doj</th>
                <th>Actions</th>
              </tr>

              

              {employeemodel.map((data, index) => {
                return (
                  <tr className="employeehover" key={data.id}>

                    <td> <img src={photo} alt="circle" className="rounded-circle imagesize me-2" />{data.empName}</td>
                    <td>{data.empNo}</td>
                    <td>{data.designation}</td>
                    <td>{data.bankAccount}</td>
                    <td>{data.pan}</td>
                    <td>{data.doj}</td>
                    <td>

                      <button className="btn btn-outline-primary employee ms-3" onClick={() => oneditEmployee(data)} data-tip="Edit Employee" > <AiFillEdit className="font3" /> </button>

                      <button className="btn btn-outline-danger ms-2  employee " onClick={() => { showDeleteDialog(index) }} data-tip="Delete Employee "><AiFillRest className="font3" /> </button>
                     

                    </td>
                  </tr>

                )
              })}
                
            </tbody>
           
         </table>
         {!employeemodel.length && <div className="text-center ">
                <FaOdnoklassniki className="text-center employeeavailable mt-5 " />
                <div>
                <h1 className="text-center text-secondary fst-italic">  No employees are available</h1></div>
                  </div>}

          
        </div>
       
      </div>


    </>
  )
}
