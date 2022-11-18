import "./Header.css";
import logo from "../Image/logo-dark.png";
import photo from "../Image/pexels-photo.jpeg";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
function Header(props) {
  return (
    <div className="border d-flex shadow">
      <div className="d-flex">
        <div>
          <img
            src={logo}
            alt="it represents company logo"
            className="logo m-2"
          />
        </div>
        
        <div className="dash  ms-4" onClick={props.hidesidebar}>
          <i className="bi bi-list "></i>
        </div>
      </div>
      <div className="flex ">
        <div className="float-end d-flex">
          <div className="notification  ms-4">
            <i className="bi bi-bell"></i>
          </div>
          <div className="m-3 ms-2">
            <img src={photo} alt="circle" className="rounded-circle round" />
          </div>

          <div className="fw-bold m-4 ms-1 btn-group ">
          <div className="dropdown">
          <button className="btn btn-light bg" type="button" data-bs-toggle="dropdown" aria-hidden="false">
           Trinits technologies



         </button>
         <ul className="dropdown-menu ">
            <li className=" dropdown-style mt-1 p-1"><Link to="/profile" className="text-decoration-none fs-5 ms-3 "><i className="bi bi-person text-dark"></i><small className=" text-dark fw-lighter fs-6 ms-2">Profile</small></Link></li>
            <li className="mt-2  dropdown-style mt-1 p-1"><Link to="/settings" className="text-decoration-none fs-5 ms-3"><i className="bi bi-gear-fill  text-dark  "></i><span className=" text-dark fw-lighter fs-6 ms-2">settings</span></Link></li>
            <li className=" mt-2  dropdown-style mt-1 p-1"><Link to="/login" className="text-decoration-none fs-5 ms-3"><FiLogIn  className="bi bi-gear-fill  text-dark "/><span className="text-dark fw-lighter fs-6 ms-2">Logout</span></Link></li>
         </ul>
         </div>
            </div>

        </div>
      </div>
    </div>
    
  );
}
export default Header;
