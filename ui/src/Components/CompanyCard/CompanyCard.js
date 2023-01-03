import { AiFillEdit, AiFillRest } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import trinits from '../Image/photo_2022-11-16_13-15-16.jpg';
import './CompanyCard.css'

export default function CompanyCard({ data, EditCard, DeleteCard, index }) {
    return (
        <div key={data.id} className=" card border company-Carddata shadow p-4 m-4 visibledata">
            <div className="text-center rounddata ">
                <img src={trinits} alt="trinits logo" style={{ width: '50px' }} />
            </div>
            <h6 className="card-title text-center width-card">

                {data.companyName}</h6>

            <h6 className="text-center">{data.addressLine1}</h6>
            <h6 className="text-center">{data.addressLine2}</h6>
            <h6 className="text-center">{data.mobileNumber}</h6>
            <p to="/logoname" className="text-center  text-primary">{data.logoName}</p>
            <div className="m-auto mt-2">
                <button className="btn btn-outline-primary Editcard" onClick={() => EditCard(data)}><AiFillEdit className="font3" /></button>

                <button className="btn btn-outline-danger ms-2 Editcard" onClick={() => DeleteCard(index)} >  <AiFillRest className="font3" /></button>
                </div>
        </div>

    )


}