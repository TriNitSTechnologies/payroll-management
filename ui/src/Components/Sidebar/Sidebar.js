import { TbAddressBook } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi2";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="border weit h-100 shadow bgrd position-relative">
      <div className="selected d-flex mt-3 sidebar-item">
        <div className="m-2 ms-3 ">
          <button className="rounded shadow back">
            <Link to="/" className="text-decoration-none back">
              <BsHouseFill/>
            </Link>
          </button>
        </div>
        <div className="fw-semibold m-2 ">
          <Link to="/" className="text-decoration-none text-dark color">
            Dashboard
          </Link>
        </div>
      </div>
      <div className="selected d-flex mt-3">
        <div className="m-2 ms-3 ">
          <button className="rounded shadow back">
            <Link to="/company" className="text-decoration-none back">
              <HiOutlineBuildingOffice2/>
            </Link>
          </button>
        </div>
        <div className="fw-semibold m-2 ">
          <Link to="/company" className="text-decoration-none  text-dark">
            Company
          </Link>
        </div>
      </div>
      <div className="selected d-flex mt-3">
        <div className="m-2 ms-3 ">
          <button className="rounded shadow back">
            <Link to="/employees" className="text-decoration-none back">
             <MdOutlinePeopleAlt/>
            </Link>
          </button>
        </div>
        <div className="fw-semibold m-2 ">
          <Link to="/employees" className="text-decoration-none  text-dark">
            Employees
          </Link>
        </div>
      </div>
      <div className="selected d-flex mt-3">
        <div className="m-2 ms-3 ">
          <button className="rounded shadow back">
            <Link to="/report" className="text-decoration-none back">
              <TbAddressBook />
            </Link>
          </button>
        </div>
        <div className="fw-semibold m-2 ">
          <Link to="/report" className="text-decoration-none  text-dark">
            Reports
          </Link>
        </div>
      </div>
      <div className="selected d-flex mt-3 bottum">
        <div className="m-2 ms-3 ">
          <button className="rounded shadow back">
            <Link to="/documents" className="text-decoration-none back">
              <HiDocumentText />
            </Link>
          </button>
        </div>
        <div className="fw-semibold m-2 ">
          <Link to="/documents" className="text-decoration-none text-dark ">
            Documents
          </Link>
          </div>
          
       
      </div>
      <div className="fw-semibold m-2 ">
        <Link to="/help" className="text-decoration-none text-dark">
          Help
        </Link>
      </div>
      <div className="fw-semibold m-2 ">
        <Link to="/refer" className="text-decoration-none text-dark">
         Refer
        </Link>
      </div>
      <div className="selected d-flex mt-3 w-100 p-2  position-absolute">
        <div className=" ms-3 ">
          <button className="rounded shadow back">
            <Link to="/settings" className="text-decoration-none back">
              <AiFillSetting />
            </Link>
          </button>
        </div>
        <div className="fw-semibold ms-3">
          <Link to="/settings" className="text-decoration-none  text-dark">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
