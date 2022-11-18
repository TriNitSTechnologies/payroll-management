import { Link } from "react-router-dom";
import logo from "../Image/logo-dark.png";


export default function MainPage(){
return(
    <div>
        <div className="d-flex  border justify-content-between shadow-lg">
        <div>
          <img
            src={logo}
            alt="it represents company logo"
            className="logo m-2"
          />
        </div>
        <div >
            <h1> Payroll-Management</h1>
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