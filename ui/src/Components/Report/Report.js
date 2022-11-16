function Report() {
  return (
    <div>
      {/* eMyB6qGRzMGUXCu */}
      {/* trinitstechnologies@gmail.com */}
      <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">Home / Reports</small>
          </div>
          <div>
            <h5>Payslip Report</h5>
          </div>
        </div>
      </div>
      <div className="card m-4 shadow ">
        <div class="card-header">
          <h5>Payslip Details</h5>
        </div>
        <div className="card-body pay  ">
          <div className="d-flex  justify-content-evenly">
            <div className="col-5 m-2 "> 
              <input className="form-control p-3 " placeholder="Company Name" type="text"/>
            </div>
            <div className="col-5  m-2">
              <input className="form-control p-3" placeholder="Employee No" type="text" />
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <div className="col-5  m-2">
              <input className="form-control p-3" placeholder="Date Of Month /year" type="date"/>
            </div>
            <div className="col-5  m-2">
              <input className="form-control p-3" placeholder="Number Of Working Days" type="text"/>
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <div className="col-5  m-2">
              <input className="form-control p-3" placeholder="Gross Salary" type="text"/>
            </div>
            <div className="col-5  m-2">
             
            </div>
          </div>
        </div>
      </div>
      <div className=" ms-4 ">
          <button className="btn btn-primary btn-lg ">Get Payslip</button>
        </div>
    </div>
  );
}
export default Report;
