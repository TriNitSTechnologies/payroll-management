
import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill, BsHouseFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ConfirmDialog } from 'primereact/confirmdialog';
import { FaOdnoklassniki } from "react-icons/fa";
import './Company.css';
import ReactTooltip from 'react-tooltip';
 Create-API-File
import { AiFillEdit } from "react-icons/ai";
import { AiFillRest } from "react-icons/ai";

 main
import trinits from '../Image/photo_2022-11-16_13-15-16.jpg'
import CompanyCard from "../CompanyCard/CompanyCard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCompany from "../AddCompany/AddCompany";
import Loading from "../Loading/Loading";
 Create-API-File
import { DeleteCompany, getData } from "../Hooks/api";
import axios from "axios";


import { AiFillEdit, AiFillRest } from "react-icons/ai";
 main
const COMPANY_URL = "https://trinitstechnologies.com/demo/api/v1/companies"
function Company() {
    const [Company, setCompanydata] = useState([]);
    const [searchcompany, setSearchcompany] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState();
    const [loading, setLoading] = useState(true);
 Create-API-File
   

const [data, setData] = useState("Table");
 main
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
let value = Company[selectedIndex];
if (value) {
            let url = COMPANY_URL + "/" + value.id
            axios.delete(url).then(data => {
                toast.success("Sucessfully deleted !", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            })
            setCompanydata(previousModels => {
                previousModels.splice(selectedIndex, 1);
                return previousModels.slice();


            });
        }

    }
    function editCompany(Company) {
        setShowcompanyForm(true);
        setselectedCompany(Object.assign({}, Company))
    }
Create-API-File
    function handleSave(showForm) {


    function getData() {
        const Url = COMPANY_URL;
        axios.get(Url).then(response => {
            setCompanydata(response.data);
            setLoading(false);

        }).catch((error) => {

            toast.error("Error occured !", {
                position: toast.POSITION.TOP_CENTER
            });
            setLoading(false);
        })

    }
function handleSave(showForm) {
 main
        setShowcompanyForm(false);
        getData();
    }

    useEffect(() => {
        getData(setCompanydata, setLoading);
    }, []);

    if (loading) {
        return <div>
            <b><Loading /></b>
        </div>
    }
function AddCompanyForm() {
        setShowcompanyForm(true);
        setselectedCompany({
            companyName: '',
            mobileNumber: '',
            addressLine1: '',
            addressLine2: '',
            logoName: '',
            state: '',
            town: '',
            pinCode: ''

        })
    }
    // function showDeletePrompt(callback) {
    //     setVisible(true);
    //     setSelectedIndex(callback);
        

    // }
    function showDeletePrompt(index) { 
        setVisible(true); 
        setSelectedIndex(index); 
 
    } 

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
        <div className="m-4">
            <ToastContainer />
            <ReactTooltip />
 Create-API-File
            <div className="card">
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" acceptClassName='p-button-danger' accept={DeleteCompany} />

            </div>

            



main
            <div className=" border-none shadow border p-3 rounded maindata-button w-100">
                <div>
                    <button className=" border border-white shadow rounded"><BsHouseFill className="icondata text-dark" /></button>
                    <Link to="/home" className="text-black text-decoration-none ms-2">Home</Link>/
                    <Link to="/Company" className="text-black text-decoration-none">Company</Link>

                </div>
                
                <div>
                    <b>Companies</b>
                </div>

            </div>

            <div className=" w-100 mt-3 d-flex  flex-wrap justify-content-between">
             <div className="shadow border rounded widthinc p-3">
                    <b>Total:{Company.length}</b>

                </div>
                <div className="btn-group buttonClass" role="group" aria-label="Basic radio toggle button group">
                    <div>
                        <button className="btn btn-success AddCompanybg float-end me-2 styles-height" onClick={() => AddCompanyForm()
                        } data-tip="CompanyForm" >

                            <i className="bi bi-plus-circle me-1"></i>Add Company
                        </button>
                    </div>
                    <button className={data === 'companyCard' ? 'btn btn-primary rounded shadow w ' : 'btn btn-outline-primary  rounded w '} data-tip="Card view" onClick={() => { setData("companyCard") }}>
                        <BsFillGridFill className="icondata text-black" />
                    </button>
                    <button className={data === 'Table' ? "btn btn-primary w rounded shadow ms-2 " : 'btn btn-outline-primary w rounded ms-2'} for="btnradio1" onClick={() => { setData("Table") }} data-tip=" Table view"><FaListUl className="icondata text-black" /> </button>
                </div>

            </div>
Create-API-File
            <div className="mt-3">

                <input type="search" placeholder="Search" onChange={(data) => setSearchcompany(data.target.value)} className="form-control search-style p-3 shadow" />
            </div>

           
 main
            <div className={data === 'companyCard' ? 'd-block  ' : 'd-none'}>

                <div className=" shadow flex-wrap flex-row d-flex border mt-2 Card-data m-auto">
                    {

                        Company.filter((data) =>JSON.stringify(data).includes(searchcompany)).map((data, index) => {
                            return (
                                <CompanyCard key={data.id} data={data} index={index} EditCard={editCompany} DeleteCard={showDeletePrompt} />

                            )

                        })

                    }
                </div>
            </div>



            <div className={data === 'Table' ? 'd-block tabledata  rounded mt-3 ' : 'd-none'}>


                <table className=" table table-hover  mt-3 companyTable table-rounded" >
                    <tbody>
                        <h4 className="mt-2">Companies</h4>
                        <tr>

                            <th>Company Name</th>
                            <th>Mobile Number</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>Logo Name</th>
                            <th>Status</th>
                        </tr>

                        {
                            Company.filter((value) => JSON.stringify(value).includes(searchcompany)).map((companyModel, index) => {
                                return (
                                    <tr className="visibleButton" key={companyModel.id}>
                                        <td> <img src={trinits} alt="trinits logo" style={{ width: '35px' }} className="me-2" />
                                            {companyModel.companyName}</td>
                                        <td>{companyModel.mobileNumber}</td>
                                        <td>{companyModel.addressLine1}</td>
                                        <td>{companyModel.addressLine2}</td>
                                        <td>{companyModel.logoName}</td>
                                         
                                        <td>
                                            <button className="btn btn-outline-primary update" data-tip="update companydata" onClick={() => editCompany(companyModel)}><AiFillEdit className="font3" /></button>
                                            <button className="btn btn-outline-danger ms-3 update" data-tip="delete companydata" onClick={() => { showDeletePrompt(index) }}
                                            >
                                                <AiFillRest className="font3" /></button>


                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {!Company.length && <div className="text-center">
                    <FaOdnoklassniki className="text-blue nodata-avail" />
                    <h1 className="text-secondary fst-italic"> No companies are available</h1>
                </div>}
            </div>
            <div className="card">
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to Delete?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" acceptClassName='p-button-danger' accept={DeleteCompany} />

            </div>
        </div>
    )
}
export default Company;