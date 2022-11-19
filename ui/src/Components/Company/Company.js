
import { Link } from "react-router-dom";

import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

import './Company.css';
import ReactTooltip from 'react-tooltip';
import { ImHome3 } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";

import trinits from '../Image/photo_2022-11-16_13-15-16.jpg'

import CompanyCard from "../CompanyCard/CompanyCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCompany from "../AddCompany/AddCompany";



const COMPANY_URL = "https://trinitstechnologies.com/demo/api/v1/companies"
function Company() {
    const [Company, setCompanydata] = useState([]);


    const [data, setData] = useState("Table");
    const [ShowCompanyForm, setShowcompanyForm] = useState(false);
    const [selectedCompany, setselectedCompany] = useState({
        companyName: '',
        mobileNumber: '',
        addressLine1: '',
        addressLine2: '',
        logoName: '',
        state: '',
        town: '',
        pinCode: ''

    });



    function onCloseHandler() {
        setShowcompanyForm(false);
      
    }
    function DeleteCompany(index) {

        let value = window.confirm('Are you sure to delete this?')

        if (value) {
            let model = Company[index];

            let url = COMPANY_URL + "/" + model.id
            axios.delete(url).then(data => {
                toast.success("Sucessfully deleted !", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            })
            setCompanydata(previousModels => {
                previousModels.splice(index, 1);
                return previousModels.slice();


            });
        }

    }

    function editCompany(Company) {
        setShowcompanyForm(true);
        setselectedCompany(Object.assign({}, Company))
    }

    function getData() {
        const Url = COMPANY_URL;
        axios.get(Url).then(response => setCompanydata(response.data)).catch((error) => {

            toast.error("Error occured !", {
                position: toast.POSITION.TOP_CENTER
            });
        })

    }

    function handleSave(showForm) {
        setShowcompanyForm(false);
        getData();
    }

    useEffect(() => {
        getData();
    }, []);

    if (ShowCompanyForm) {
        return (
            <AddCompany
                onCancel={onCloseHandler}
                selectedCompany={selectedCompany}
                onAddCompnay={handleSave}
                initialValues={selectedCompany}
            />
        )
    }


    return (
        <div className=" shadow p-4 m-4">
            <ToastContainer />
            <ReactTooltip />
            {
                ShowCompanyForm ? <AddCompany onCancel={onCloseHandler} selectedCompany={selectedCompany} /> : null
            }



            <div className=" border-none shadow border p-3 rounded maindata-button w-100">
                <div>
                    <button className=" border border-white shadow rounded"><ImHome3 className="icondata" /></button>
                    <Link to="/" className="text-black text-decoration-none ms-2">Home</Link>/
                    <Link to="/Company" className="text-black text-decoration-none">Company</Link>

                </div>
                <div>
                    <b>Companies</b>
                </div>

            </div>







            <div className=" w-100 mt-3 d-flex justify-content-between">
                <div className="shadow border rounded widthinc p-3">
                    <b>Total:{Company.length}</b>

                </div>



                <div className="btn-group buttonClass" role="group" aria-label="Basic radio toggle button group">
                    <div>
                        <button className="btn btn-success  float-end me-2 styles-height" onClick={() => setShowcompanyForm(true)}>

                            <i className="bi bi-plus-circle me-1"></i>Add Company
                        </button>
                    </div>
                    <button className={data === 'companyCard' ? 'btn btn-primary rounded shadow w ' : 'btn btn-outline-primary  rounded w '} data-tip="Company Card data">
                        <BsFillGridFill className="icondata text-black" onClick={() => { setData("companyCard") }} />


                    </button>
                    <button className={data === 'Table' ? "btn btn-primary w rounded shadow ms-2 " : 'btn btn-outline-primary w rounded ms-2'} for="btnradio1" onClick={() => { setData("Table") }} data-tip="Company Table data"><FaListUl className="icondata text-black" /> </button>
                </div>

            </div>
            <div className={data === 'companyCard' ? 'd-block  ' : 'd-none'}>
                {
                    data === 'companyCard' ? <CompanyCard /> : null
                }
            </div>

            <div className={data === 'Table' ? 'd-block tabledata  rounded mt-3 ' : 'd-none'}>
                <h5 className="mt-2 ms-2">Project Summery</h5>
                <table className=" table table-hover mt-3 table-rounded">
                    <tbody>
                        <tr>

                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>Logo Name</th>
                            <th>Status</th>
                        </tr>
                        {
                            Company.map((companyModel, index) => {
                                return (
                                    <tr key={companyModel.id}>



                                        <td> <img src={trinits} alt="trinits logo" style={{ width: '35px' }} className="me-2" />


                                            {companyModel.companyName}</td>
                                        <td>{companyModel.mobileNumber}</td>
                                        <td>{companyModel.addressLine1}</td>
                                        <td>{companyModel.addressLine2}</td>
                                        <td>{companyModel.logoName}</td>
                                        <td className="d-flex">


                                            <button className="btn btn-primary " data-tip="update companydata" onClick={() => editCompany(companyModel)}><FaPenAlt /></button>
                                            <button className="btn btn-danger ms-3 " data-tip="delete companydata" onClick={() => DeleteCompany(index)}
                                            >

                                                <FaTrash /></button>

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