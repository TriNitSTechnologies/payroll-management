import { useEffect, useState } from "react"
import axios from "axios";
import trinits from '../Image/photo_2022-11-16_13-15-16.jpg'
import './CompanyCard.css'

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CompanyCard() {
    const [posts, setPost] = useState([]);

    function getData() {
        const url = "https://trinitstechnologies.com/demo/api/v1/companies";

        axios.get(url).then(response => setPost(response.data)).catch((error) => {
            // alert('error is occured');
            toast.error("Error Notification !", {
                position: toast.POSITION.TOP_LEFT
              });
        })
    }
    useEffect(() => {
        getData();
    }, []);
    return (

        <div>
            <div className=" shadow flex-wrap flex-row d-flex border mt-2 Card-data">
                <ToastContainer />


                {
                    posts.map(data => {
                        return (
                            <div key={data.id} className=" card border company-Carddata shadow p-3 m-3 ">
                                <div className="text-center rounddata">
                                <img src={trinits} alt="trinits logo" style={{width:'50px'}} />
                                </div>
                                <h6 className="card-title text-center width-card">

                                    {data.companyName}</h6>

                                <h6 className="text-center">{data.addressLine1}</h6>
                                <h6 className="text-center">{data.addressLine2}</h6>
                                <h6 className="text-center">{data.mobileNumber}</h6>
                               


                                <Link to="/logoname" className="text-center">{data.logoName}</Link>



                            </div>

                        )
                    })
                }



            </div>

        </div>
    )
}