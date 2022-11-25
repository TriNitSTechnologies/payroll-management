import './details.css'
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencilSquare, BsTrash } from 'react-icons/bs';


export default function Details(){
    return(
        <div className='my-details-app'>

            <div className='row detail-row my-3 m-auto'>
                <div className='col-sm-4  details'>
                    <div className='card shadow'>
                        <div className='card-header  bg-white  d-flex justify-content-between align-items-center'>
                            <div >
                                <h4>Basic Information</h4>
                            </div>
                              
                            <span className='d-flex justify-content-center align-items-center'>
                                    <span className='edit-link d-flex align-items-center me-2'><AiOutlinePlus className='fs-4 text-primary'/></span>
                                    <span className='edit-link  d-flex align-items-center'><BsTrash className='fs-4 text-danger'/></span>
                            </span>
                        </div>
                        <div className='card-body d-flex justify-content-between  '>
                            <div>
                                <div>
                                    <small>Prepfered Name</small>  
                                </div> 
                                <div>
                                    <small>First Name</small>                               
                                </div> 
                                <div>
                                    <small>Last Name</small>                               
                                </div>
                                <div>
                                    <small>Nationality</small>                               
                                </div>
                                <div>
                                    <small>Date of Birth</small>                              
                                </div>
                                <div>
                                    <small>Gender</small>                              
                                </div>
                                <div>
                                    <small>Blood Group</small>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <small className='text-primary'>Maria</small>  
                                </div> 
                                <div>
                                    <small className='text-primary'>Maria</small>                               
                                </div> 
                                <div>
                                    <small className='text-primary'>Cotton</small>                               
                                </div>
                                <div>
                                    <small className='text-primary'>America</small>                               
                                </div>
                                <div>
                                    <small className='text-primary'>Date of Birth</small>                              
                                </div>
                                <div>
                                    <small className='text-primary'>Female</small>                              
                                </div>
                                <div>
                                    <small className='text-primary'>A+</small>
                                </div>
                            </div>
                    </div>
                         
                    </div>
                </div>
                <div className='col-sm-4 details'>
                    <div className='card shadow'>
                        <div className='card-header bg-white  d-flex justify-content-between align-items-center'>
                            <div>
                                <h4>Basic Information</h4> 
                            </div>
                            <span className='d-flex justify-content-center align-items-center'>
                                    <span className='edit-link d-flex align-items-center me-2'><AiOutlinePlus className='fs-4 text-primary'/></span>
                                    <span className='edit-link  d-flex align-items-center'><BsTrash className='fs-4 text-danger'/></span>
                            </span>
                            
                        </div>
                        <div className='card-body d-flex justify-content-between '>
                            <div>
                                <div>
                                    <small>Phone Number</small>  
                                </div> 
                                <div>
                                    <small>Personal Email</small>                               
                                </div> 
                                <div>
                                    <small>Secondary Number</small>                               
                                </div>
                                <div>
                                    <small>Web Site</small>                              
                                </div>
                                <div>
                                    <small>Linkedin</small>                              
                                </div>                               
                            </div>

                            <div>
                                <div>
                                    <small className='text-primary'>98435674</small>  
                                </div> 
                                <div>
                                    <small className='text-primary'>Mariacotton@gmail.com</small>                               
                                </div> 
                                <div>
                                    <small className='text-primary'>958567</small>                               
                                </div>
                                <div>
                                    <small className='text-primary'>www.trinits.com</small>                               
                                </div>
                                <div>
                                    <small className='text-primary'>#mariacotton</small>                              
                                </div>                  
                            </div>
                               
                        </div>
                    </div>
                </div>

            <div className='col-sm-4 details'>
                    <div className='col'>
                        <div className='card shadow'>
                            <div className='card-header bg-white  d-flex justify-content-between align-items-center'>
                                <div>
                                    <h4>Dates</h4> 
                                </div>

                                <span className='d-flex justify-content-center align-items-center'>
                                    <span className='edit-link d-flex align-items-center'><BsPencilSquare className='fs-4 text-primary'/></span>
                                </span> 
                            </div>
                            <div className='card-body d-flex justify-content-between align-items-center'>

                            <div>
                                <div>
                                    <small>phoneNumber</small>                 
                                </div>
                                <div>
                                    <small>PersonalEmail</small>
                                </div>
                            </div>
                               
                            <div>
                                <div>
                                    <small className='text-primary'>8765783576</small>                                   
                                </div>
                                <div>
                                    <small className='text-primary'>mariacotton@example.com</small>
                                </div>
                            </div>
                                

                            </div>
                        </div>
                    </div>

                    <div className='col my-3'>
                            <div className='card shadow'>
                                <div className='card-header bg-white p-3 d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h4>Contact</h4>  
                                    </div>
                                    <div>
                                        <small>New Type</small>
                                    </div>
                                
                                </div>
                                <div className='card-body p-3'>
                                  <div>
                                    <input type="text" className='form-control p-3' placeholder='Add start date'/>
                                  </div>

                                  <div className='my-2'>
                                    <input  type='text' className='form-control p-3' placeholder='Add Visa Expiry Date'/>
                                  </div>

                                  <div>
                                    <button className='btn btn-success w-100'>Submit</button>
                                  </div>
                                </div>

                            </div>
                    </div>
            </div>
                
            </div>
        </div>
    )
}