import { FaPenAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import trinits from '../Image/photo_2022-11-16_13-15-16.jpg'

export default function CompanyCard({data,EditCard,DeleteCard, index}) {
    
    
    
             return (
                            <div key={data.id} className=" card border company-Carddata shadow p-4 m-4">
                                <div className="text-center rounddata ">
                                    <img src={trinits} alt="trinits logo" style={{ width: '50px' }} />
                                </div>
                                <h6 className="card-title text-center width-card">

                                    {data.companyName}</h6>

                                <h6 className="text-center">{data.addressLine1}</h6>
                                <h6 className="text-center">{data.addressLine2}</h6>
                                <h6 className="text-center">{data.mobileNumber}</h6>



                                <Link to="/logoname" className="text-center">{data.logoName}</Link>
                                <div className="m-auto mt-2">
                                    <button className="btn btn-primary" onClick={() =>EditCard(data)}><FaPenAlt /></button>
                                    <button className="btn btn-danger ms-2" onClick={() =>DeleteCard(index)} > <FaTrash /></button>
                                </div>



                            </div>

                        )
    

}