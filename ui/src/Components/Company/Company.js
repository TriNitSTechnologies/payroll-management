
import { Link } from "react-router-dom";

import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { ConfirmDialog } from 'primereact/confirmdialog';


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
import Loading from "../Loading/Loading";



const COMPANY_URL = "https://trinitstechnologies.com/demo/api/v1/companies"
function Company() {
    const [Company, setCompanydata] = useState([]);

    const [visible, setVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState();

    const [loading, setLoading] = useState(true);


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
        setShowcompanyForm(false);
        getData();
    }

    useEffect(() => {
        setTimeout(() => {
            getData();

        })

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
            <div className="card">
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" acceptClassName='p-button-danger' accept={DeleteCompany} />

            </div>



            <div className=" border-none shadow border p-3 rounded maindata-button w-100">
                <div>
                    <button className=" border border-white shadow rounded"><ImHome3 className="icondata" /></button>
                    <Link to="/home" className="text-black text-decoration-none ms-2">Home</Link>/
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
                        <button className="btn btn-success  float-end me-2 styles-height" onClick={() => AddCompanyForm()
                        } data-tip="CompanyForm" >

                            <i className="bi bi-plus-circle me-1 text-wrap"></i>Add Company
                        </button>
                    </div>
                    <button className={data === 'companyCard' ? 'btn btn-primary rounded shadow w ' : 'btn btn-outline-primary  rounded w '} data-tip="Company Card data" onClick={() => { setData("companyCard") }}>
                        <BsFillGridFill className="icondata text-black" />


                    </button>
                    <button className={data === 'Table' ? "btn btn-primary w rounded shadow ms-2 " : 'btn btn-outline-primary w rounded ms-2'} for="btnradio1" onClick={() => { setData("Table") }} data-tip="Company Table data"><FaListUl className="icondata text-black" /> </button>
                </div>

            </div>
            <div className={data === 'companyCard' ? 'd-block  ' : 'd-none'}>

                <div className=" shadow flex-wrap flex-row d-flex border mt-2 Card-data m-auto">
                    {

                        Company.map((data, index) => {
                            return (
                                <CompanyCard key={data.id} data={data} index={index} EditCard={editCompany} DeleteCard={showDeletePrompt} />

                            )

                        })

                    }
                </div>
            </div>

            <div className={data === 'Table' ? 'd-block tabledata  rounded mt-3 ' : 'd-none'}>
                <h5 className="mt-2 ms-2">Companies</h5>
                <table className=" table table-hover  mt-3 companyTable table-rounded">
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
                                    <tr className="visibleButton" key={companyModel.id}>
                                        <td> <img src={trinits} alt="trinits logo" style={{ width: '35px' }} className="me-2" />
                                            {companyModel.companyName}</td>
                                        <td>{companyModel.mobileNumber}</td>
                                        <td>{companyModel.addressLine1}</td>
                                        <td>{companyModel.addressLine2}</td>
                                        <td>{companyModel.logoName}</td>
                                        <td className="d-flex ">
                                            <button className="btn btn-primary update" data-tip="update companydata" onClick={() => editCompany(companyModel)}><FaPenAlt /></button>
                                            <button className="btn btn-danger ms-3 update" data-tip="delete companydata" onClick={() => { showDeletePrompt(index) }}
                                            >
                                                <FaTrash /></button>

                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {!Company.length && <div className="text-center Company-NotFound">No Companies are Available</div>}
            </div>
        </div>
    )
}
export default Company;