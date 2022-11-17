

function AddCompany(props){
    return(
        <div className="card m-3 p-4 w-50 m-auto">
            <h4>Add Company Information</h4>
            <div className="d-flex mt-3">
                <input type="text" placeholder="CompanyName" className="form-control" />
                <input type="text" placeholder="MobileNumber" className="form-control ms-2" />
            </div>
            <div  className="d-flex mt-3">
                <input type="text" placeholder="addressLine1" className="form-control" />
                <input type="text" placeholder="addressLine2" className="form-control ms-2" />
            </div>
            <div  className="d-flex mt-3">
                <input type="text" placeholder="createdDate" className="form-control" />
                <input type="text" placeholder="landMark" className="form-control ms-2" />
            </div>
            <div  className="d-flex mt-3">
                <input type="text" placeholder="logoName" className="form-control" />
                <input type="text" placeholder="pinCode" className="form-control ms-2" />
            </div>
            <div  className="d-flex mt-3">
                <input type="text" placeholder="state" className="form-control" />
                <input type="text" placeholder="town" className="form-control ms-2" />
            </div>
            <div>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-danger" onClick={props.onCancel}>Delete</button>
            </div>



        </div>
    )
}
export default AddCompany;