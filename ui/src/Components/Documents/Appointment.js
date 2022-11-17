import './Appointment.css'

export default function Appointment() {

  return (
    <div  className="border py-2 doc-home-log">
      <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">Home / company</small>
          </div>
          <div>
            <h5>Document</h5>
          </div>
        </div>
      </div>

      <div className="card  m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Basic Details</h4>
          <p>Organized and secure</p>
        </div>
        <div className="card-body pay  ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 ">
              <input
                className="form-control p-3 "
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="col-5  m-2">
              <input
                className="form-control p-3"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2">
              <input
                className="form-control p-3 "
                placeholder="Email address"
                type="text"
              />
            </div>

            <div className="col-5  m-2"></div>
              
          </div>
          
        </div>
      </div>

      <div className="card m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Company Details</h4>
          <p>Let every one Know the essentials so they're fully prepared</p>
        </div>
        <div className="card-body pay ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 ">
              <input
                className="form-control p-3 "
                placeholder="Company_Name"
                type="text"
              />
            </div>
            <div className="col-5  m-2">
              <input
                className="form-control p-3"
                placeholder="Company_Addresss"
                type="text"
              />
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2">
              <input
                className="form-control p-3"
                placeholder="Date Of Month /year"
                type="Date"
              />
            </div>
            <div className="col-5  m-2"></div>
              
           
          </div>
          
        </div>
      </div>

      <div className="card m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Employee Details</h4>
          <p>Let every one Know the essentials so they're fully prepared</p>
        </div>
        <div className="card-body pay ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 ">
              <input
                className="form-control p-3 "
                placeholder="Employee_Name"
                type="text"
              />
            </div>
            <div className="col-5  m-2">
              <input
                className="form-control p-3"
                placeholder="Employee_Designation"
                type="text"
              />
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2 ">
              <input
                className="form-control p-3"
                placeholder="Employee_joining_date"
                type="Date"
              />
            </div>
            <div className='col-5 m-2'>
            <input
                className="form-control p-3"
                placeholder="Employee_ID"
                type="text"
              />
            </div>
            
              
          </div>
          
        </div>
      </div>


      <div className="card m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Human Resource_HR</h4>
          <p>Let every one Know the essentials so they're fully prepared</p>
        </div>
        <div className="card-body pay ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 ">
              <input
                className="form-control p-3 "
                placeholder="HR_Name"
                type="text"
              />
            </div>
            <div className="col-5  m-2">
              <input
                className="form-control p-3"
                placeholder="HR_Designation"
                type="text"
              />
            </div>
          </div>
          
        </div>
      </div>


        <span className=" d-flex ms-4">
          <button className="btn btn-success btn-lg ">Add member</button>
          <button className="btn btn-primary btn-lg mx-3 ">Generate</button>
        </span>
    </div>
  );
}
