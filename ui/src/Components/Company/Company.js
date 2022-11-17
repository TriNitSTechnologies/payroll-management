
import { Link } from "react-router-dom";

import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoAddSharp } from "react-icons/io5";
import './Company.css';
import ReactTooltip from 'react-tooltip';
import { ImHome3 } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";

import CompanyCard from "../CompanyCard/CompanyCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const COMPANY_URL = "https://trinitstechnologies.com/demo/api/v1/companies"
function Company() {

    const [Company, setCompanydata] = useState([]);
    const [data, setData] = useState("");
   
    
    function getData() {
        const Url = COMPANY_URL;
        axios.get(Url).then(response => setCompanydata(response.data)).catch((error) => {
            toast("error occured")
        })

    }
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <div className="border shadow p-4 m-4">
            <ToastContainer />
            <ReactTooltip />
           

            <h4>Company data</h4>
            <div className="shadow border  p-3 rounded maindata-button w-100">
                <div>
                    <button className="border border-white shadow rounded"><ImHome3 className="icondata " /></button>
                    <Link to="/" className="text-black text-decoration-none ms-2">Home</Link>/
                    <Link to="/Company" className="text-black text-decoration-none">Company</Link>

                </div>
                <div>
                    <b>Companies</b>
                </div>

            </div>

            <div className="maindata-button  w-100 mt-2">

                <div>
                    <button className="btn btn-success" >
                    <IoAddSharp className="text-white " />Add Company
                    </button>
                </div>

            </div>

            <div className="data w-100 mt-2">
                <div className="shadow border  w-75 rounded widthinc p-3">
                    <b>Total:{Company.length}</b>

                </div>

                <div className="btn-group buttonClass" role="group" aria-label="Basic radio toggle button group">
                    <button className={data === 'companyCard' ? 'btn btn-primary rounded shadow w ' : 'btn btn-outline-primary w '} data-tip="Company Card data">
                        <BsFillGridFill className="icondata text-black" onClick={() => { setData("companyCard") }} />


                    </button>
                    <button className={data === 'Table' ? "btn btn-primary w rounded shadow ms-2 " : 'btn btn-outline-primary w  ms-2'} for="btnradio1" onClick={() => { setData("Table") }} data-tip="Company Table data"><FaListUl className="icondata text-black" /> </button>
                </div>

            </div>
            <div className={data === 'companyCard' ? 'd-block  ' : 'd-none'}>
                {
                    data === 'companyCard' ? <CompanyCard /> : null
                }
            </div>

            <div className={data === 'Table' ? 'd-block tabledata mt-3 ' : 'Table'}>
                <table className="table table-striped table-hover table-bordered border-primary mt-3">
                    <tbody>
                        <tr>
                            <th>CompanyName</th>
                            <th>Mobile Number</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>Logoname</th>
                            <th>Status</th>
                        </tr>
                        {
                            Company.map((companyModel, index) => {
                                return (
                                    <tr key={companyModel.id}>
                                        <td>{companyModel.companyName}</td>
                                        <td>{companyModel.mobileNumber}</td>
                                        <td>{companyModel.addressLine1}</td>
                                        <td>{companyModel.addressLine2}</td>
                                        <td>{companyModel.logoName}</td>
                                        <td>


                                            <button className="btn btn-primary" data-tip="update companydata"><FaPenAlt  /></button>
                                            <button className="btn btn-danger ms-3" data-tip="delete companydata"><FaTrash  /></button>

                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>



        </div>
    )
}
export default Company;