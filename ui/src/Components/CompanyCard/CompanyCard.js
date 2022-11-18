import { useEffect, useState } from "react"
import axios from "axios";
import trinits from '../Image/photo_2022-11-16_13-15-16.jpg'
import './CompanyCard.css'

import { Link } from "react-router-dom";

export default function CompanyCard() {
    const [posts, setPost] = useState([]);

    function getData() {
        const url = "https://trinitstechnologies.com/demo/api/v1/companies";

        axios.get(url).then(response => setPost(response.data)).catch((error) => {
            alert('error is occured');
        })
    }
    useEffect(() => {
        getData();
    }, []);
    return (

        <div>
            <div className=" shadow flex-wrap flex-row d-flex border m-auto mt-2">


                {
                    posts.map(data => {
                        return (
                            <div key={data.id} className=" card border company-Carddata shadow p-4 m-4 ">
                                <div className="text-center rounddata">
                                <img src={trinits} alt="trinits logo" style={{width:'50px'}} />
                                </div>
                                <h6 className="card-title text-center width-card">

                                    {data.companyName}</h6>

                                <h6 className="text-center">{data.addressLine1}</h6>

                                <Link to="/logoname" className="text-center">{data.logoName}</Link>



                            </div>

                        )
                    })
                }



            </div>

        </div>
    )
}