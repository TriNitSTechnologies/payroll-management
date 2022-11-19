import { Link } from "react-router-dom";
import logo from "../Image/logo-dark.png";


export default function MainHead(){
return(
    <div className="h-100">
        <div className="d-flex h-100 border justify-content-between shadow-lg">
        <div className="d-flex">
          <img
            src={logo}
            alt="it represents company logo"
            className="logo m-2"
          />
           <h1 className="mt-3"> Payroll-Management</h1>
        </div>
       
        <div className="mt-2 p-2 selected:hover rounded">
            <Link to="/login">
            <button className="rounded ">Login</button>
            </Link>
        </div>
        </div>
        
    </div>
)

}