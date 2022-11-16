
import { Link } from "react-router-dom";
import { FiAirplay } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoAddSharp } from "react-icons/io5";




import Card from "../Card/Card";


const SERVER_URL = "https://trinitstechnologies.com/demo/api/v1/companies";
function Company() {

    const [showCard, setShowCard] = useState(false);
    // let {isLoggedIn} = this.state;

    const [companyModel, setcompanyModels] = useState([]);
    const [Company, setCompanydata] = useState([]);
    const [data,setData] = useState("");



    function getData() {
        const Url = "https://trinitstechnologies.com/demo/api/v1/companies";
        axios.get(Url).then(response => setCompanydata(response.data)).catch((error) => {
            alert("error is occured");
        })

    }
    useEffect(() => {
        getData();
    }, []);


    function editCompany(Company) {
        alert(JSON.stringify(Company, null, 2));
        const url = SERVER_URL + "/" + Company.id
        axios.put(url)
            .then(response =>
                setCompanydata(prevModels => {
                    const result = prevModels.slice();
                    result.push(response.data);
                    return result;
                })

                    .catch(error => alert('errr occuredd'))

            )

    }
    function deletecompany(index) {
        let value = window.confirm('are you sure delete this?')

        if (value) {

            let model = companyModel[index]
            const url = SERVER_URL + "/" + model.id

            axios.delete(url).then(response => response.data).catch(error => alert("error occured"))


        }

        setcompanyModels(prevmodels => {
            prevmodels.splice(index, 1);
            return prevmodels.slice()
        });

    }



    return (
        <div className="border shadow  p-4 m-4">

            <h4>Company data</h4>
            <div className="shadow border  p-3 rounded maindata w-100">
                <div>
                    <Link to="/Home" className="text-black"><FiAirplay className="icondata me-2" /> Home</Link>/
                    <Link to="/Company" className="text-black">Company</Link>

                </div>
                <div>
                    <b>Companies</b>
                </div>

            </div>

            <div className="maindata  w-100 mt-2">
                <div className="btn-group " role="group" aria-label="Basic radio toggle button group">
                    <button className="btn btn-primary w" for="btnradio1">All</button>
                    <button className="btn btn-outline-primary w shadow" for="btnradio1">Theams</button>
                    <button className="btn btn-outline-primary w shadow" for="btnradio1">Companies</button>

                </div>

                <div>

                    <button className="btn btn-success">
                        <IoAddSharp className="text-white " />Add Company
                    </button>
                </div>

            </div>

            <div className="data w-100 mt-2">
                <div className="shadow border  w-75 rounded widthinc">
                    <b>Total:{Company.length}</b>

                </div>

                <div className="btn-group buttonClass" role="group" aria-label="Basic radio toggle button group">
                    <button className={data == 'Card' ? 'btn btn-primary   ':'btn btn-outline-primary w '}>
                        <BsFillGridFill className="icondata text-black" onClick={() => { setData("Card") }} />


                    </button>
                    <button className={data == 'Table' ? "btn btn-primary w shadow ms-2 ":'btn btn-outline-primary  ms-2'} for="btnradio1" onClick={() => { setData("Table") }}><FaListUl className="icondata text-black"  /> </button>
                </div>

            </div>
            <div className={data == 'Card' ? 'd-block  ':'d-none'}>
            {
                data == 'Card' ? <Card /> : null
            }
            </div>
           
            <div className={data == 'Table' ? 'd-block tabledata mt-3 ':'d-none'}>
                <table className="table table-striped table-hover table-bordered border-primary">
                    <tbody>
                        <tr>
                            <th>companyName</th>
                            <th>mobileNumber</th>
                            <th>addressLine1</th>
                            <th>addressLine2</th>
                            <th>logoName</th>
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


                                            <button className="btn btn-primary" >Update</button>
                                            <button className="btn btn-danger ms-3" onClick={() => deletecompany(index)}>delete</button>

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