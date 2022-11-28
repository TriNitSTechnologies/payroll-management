import { TbAddressBook } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi2";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { BiUserCheck } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import ReactTooltip from "react-tooltip";
function Sidebar() {
  const locationobj = useLocation();
  const pathname = locationobj.pathname;

  return (
    
    <div className="border weit h-100 shadow bgrd position-relative">
      <ReactTooltip/>
      <div className={pathname === "/home" ? " sidebar-item" : ''}>
        <div className="d-flex mt-3 selected " data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right" >
          <div className="m-2 button ">
            <button className="rounded shadow back" type="button" data-tip="Dashboard">
              <Link to="/home" className="text-decoration-none back">
                <BsHouseFill />
              </Link>
            </button>
          </div>
          <div className="fw-semibold m-2 ">
            <Link to="/home" className="text-decoration-none text-dark color">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <div className={pathname === "/company" ? " sidebar-item" : ''}>
        <div className="d-flex mt-3 selected">
          <div className="m-2  button ">
            <button className="rounded shadow back" data-tip="Companys">
              <Link to="/company" className="text-decoration-none back">
                <HiOutlineBuildingOffice2 />
              </Link>
            </button>
          </div>
          <div className="fw-semibold m-2 ">
            <Link to="/company" className="text-decoration-none  text-dark">
              Companys
            </Link>
          </div>
        </div>
      </div>
      <div className={pathname === "/employees" ? " sidebar-item" : ""}>
        <div className="d-flex mt-3 selected">
          <div className="m-2 button ">
            <button className="rounded shadow back" data-tip="Employees">
              <Link to="/employees" className="text-decoration-none back">
                <MdOutlinePeopleAlt />
              </Link>
            </button>
          </div>
          <div className="fw-semibold m-2 ">
            <Link to="/employees" className="text-decoration-none  text-dark">
              Employees
            </Link>
          </div>
        </div>
      </div>
      <div className={pathname === "/buttons" ? " sidebar-item" : ""}>
        <div className=" d-flex mt-3 selected">
          <div className="m-2 button ">
          <button className="rounded shadow back" data-tip="Reports">
            <Link to="/buttons" className="text-decoration-none back">
              <TbAddressBook />
            </Link>
          </button>
        </div>
        <div className="fw-semibold m-2 ">
          <Link to="/buttons" className="text-decoration-none  text-dark">
            Reports
          </Link>
        </div>
        </div>
      </div>
      <div className={pathname === "/documents" ? " sidebar-item" : ""}>
        <div className="d-flex mt-3  selected">
          <div className="m-2 button ">
            <button className="rounded shadow back" data-tip="Documents">
              <Link to="/documents" className="text-decoration-none back ">
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
      </div>
      <div className={pathname === "/reimbursement" ? " sidebar-item" : ""}>
        <div className="d-flex mt-3  selected">
          <div className="m-2 button ">
            <button className="rounded shadow back" data-tip="Reimbursement">
              <Link to="/reimbursement" className="text-decoration-none back ">
                <GiTakeMyMoney />
              </Link>
            </button>
          </div>
          <div className="fw-semibold m-2 ">
            <Link to="/reimbursement" className="text-decoration-none text-dark ">
              Reimbursement
            </Link>
          </div>
        </div>
      </div>
      <div className={pathname === "/attendenseForm" ? " sidebar-item" : ""}>
        <div className=" d-flex mt-3 selected">
          <div className="m-2 button ">

            <button className="rounded shadow back" data-tip="Attendance">
              <Link to="/Attendense" className="text-decoration-none back">

                <BiUserCheck />
              </Link>
            </button>
          </div>
          <div className="fw-semibold m-2 ">
            <Link to="/attendenseForm" className="text-decoration-none  text-dark">
              Attendance

            </Link>
          </div>
        </div>
      </div>


      <div className=" mt-3 w-100  position-absolute selected">
        <div className={pathname === "/settings" ? " sidebar-item " : ""}>
          <div className="d-flex">
            <div className=" button m-2">
              <button className="rounded shadow back" data-tip="Settings">
                <Link to="/settings" className="text-decoration-none back">
                  <AiFillSetting />
                </Link>
              </button>
            </div>
            <div className="fw-semibold  m-2">
              <Link to="/settings" className="text-decoration-none  text-dark">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
export default Sidebar;
