import ReactTooltip from 'react-tooltip';
import './My-Profile.css'
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";


export default function MyProfile() {
  return (
    
    <div className="my-profile-set">
      <ReactTooltip/>  
    <div className='row main-row my-3 m-auto'>
        <div className='col-sm-6 main-v'>
          <div className='card shadow '>
              <div className='card-header bg-white'>
                  <h5 className='card-title'>ADD Maria Cotton to Another Team</h5>
              </div>
              <div className='card-body '>
              <select className="form-select p-3 text-center" aria-label="Default select example">
                  <option selected> select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
               <div className='my-2'>
                <button className='btn btn-outline-success btn-lg'>New Team</button>
               </div>
              
              </div>
          </div>           
        </div>

        <div className='col-sm-6 main-v'>
            <div className='card shadow'>
              <div className='card-header bg-white  d-inline-flex justify-content-between align-items-center'>
                <h5>PHP Team</h5>
                <span className='d-flex justify-content-center align-items-center '>
                  <span className='fs-4 px-2 text-primary btn btn-white border me-2'><BsPencilSquare/></span>
                  <span className='fs-4 px-2 text-danger btn btn-white border'><BsTrash/></span>
                </span>
                
              </div>
              <div className='card-body d-flex align-items-center py-5'>
                <div>
                    <span>image here</span>
                </div>
                <div>
                  <h3>Maria Cotton</h3>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div className='card my-3 shadow mx-3'>
      <div className='card-header bg-white d-inline-flex justify-content-between align-items-center p-3'>
           <div>
             <h5>Focus Technologies</h5>
             <small className='fw-Normal'>Head office</small>
           </div>
           <div>
              <button className='btn btn-primary active'>Change office</button>
           </div> 
      </div>  
      <div className='card-body d-inline-flex justify-content-between align-items-center py-5'>
        <div className='p-3'>
          <h6>Members</h6>
        </div>
        <div className='p-3'>
           <button className='btn btn-primary active'>Visit Office</button> 
        </div>
      </div>

    </div>

   <div className='row main-row m-auto'>
      <div className='col-sm-6 main-v'>

        <div className='card shadow'>
          <div className='card-header bg-white  d-inline-flex justify-content-between align-items-center'>
                <h5>Maria Cotton's Manager</h5>
                <span className='d-flex justify-content-center align-items-center '>
                  <span className='fs-4 px-2 text-primary btn btn-white border me-2'><BsPencilSquare/></span>
                  <span className='fs-4 px-2 text-danger btn btn-white border'><BsTrash/></span>
                </span>
          </div>

          <div className='card-body d-inline-flex justify-content-between align-items-center py-5'>
            <div>
                <h5>Maria Cotton</h5>
                <small>mariacotton@gmail.com</small>
            </div> 
            <div>
              <button className='btn btn-success'>Change Manager</button>
            </div>  
          </div>
        </div>

      </div>

      <div className='col-sm-6 main-v'>

        <div className='card shadow'>
          <div className='card-header py-4 bg-white'>
                <h5>Who Reports to Maria Cotton</h5>
          </div>
          <div className='card-body d-inline-flex justify-content-between align-items-center py-5'>
                <div>
                  <span>images here</span>
                </div>
                <div>
                  <button className='btn btn-success' data-tip='add people'>Add People</button>
                </div>
          </div>
        </div>

      </div>

   </div>

   <div className='row main-row my-3 m-auto '>
      <div className='col-sm-6 main-v'>
        <div className='card shadow '>
          <div className='card-header bg-white'>
                <h5>Position</h5>
          </div>
          <div className='card-body'>
                <div>
                  <input type='text' className='form-control p-3' placeholder='Job title'/>
                </div>
                <div className='my-3'>
                  <input type='text' className='form-control p-3' placeholder='Permanent'/>
                </div>
                <div className='my-2 main-button-lot'>
                  <div>
                    <button className='btn btn-outline-success' type='button'>PHP Team Lead</button>
                  </div>
                  <div className='py-2'>
                    <button className='btn btn-outline-success' type='button'>Permanent</button>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className='col-sm-6 main-v '>
        <div className='card shadow'>
            <div className='card-header bg-white d-inline-flex justify-content-between align-items-center'>
              <div>
                  <h5>Working Week</h5>
                  <small>Set the dates that your company works</small>
              </div>
              <div>
                  <span className='fs-4 px-2 text-primary btn btn-white border me-2'><BsPencilSquare/></span>
              </div>
                 
            </div>
            <div className='card-body d-flex justify-content-evenly flex-wrap py-5'>
                <div>
                  <button className='btn btn-primary active' >Mon</button>
                 </div>
                 <div>
                  <button className='btn btn-primary active' >Tue</button>
                 </div>
                <div>
                  <button className='btn btn-primary active' >Wed</button>
                </div>
                <div>
                  <button className='btn btn-primary active' >Thu</button>
                </div>
                <div>
                  <button className='btn btn-primary active' >Fri</button>
                </div>
                <div>
                  <button className='btn btn-danger' >Sat</button>
                </div>
                <div>
                  <button className='btn btn-danger' >Sun</button>
                </div>
            </div>
        </div>
      </div>
   </div>
      
      
    </div>
  );
}
