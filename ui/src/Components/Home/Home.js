import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { BsHouseFill } from "react-icons/bs";
import Company from "../Company/Company";
function Home() {
  return (
    <div>
      <div className="dashboard-card p-5">
        <div className="rounded admin-card ">
          <div className="d-flex fs-4 justify-content-between  p-3 ">
            <div>
              <b> Welcome Admin</b>
            </div>
            <div>{new Date().toDateString()}</div>
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-between">
          <div className="w-45">
            <div className="card">
              <div className="d-flex justify-content-between p-3 shadow">
                <div>
                  <span className="back rounded shadow ms-2 p-2">
                    {" "}
                    <BsHouseFill />
                  </span>{" "}
                  Home / Dashboard
                </div>
                <div className="fs-5">
                  <b>Admin Dashboard</b>
                </div>
              </div>
            </div>
          </div>
          <div className="w-45">
            <div className="d-flex text-white text-center ">
              <Link className="w-50 text-white links">
                <div className=" admin-dashboard-card p-3  me-3 rounded">
                  Admin Dashboard
                </div>
              </Link>
              <Link className="w-50 links">
                <div className="rounded text-black employe-dashboard-card p-3 ">
                  Employee Dashboard
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div className="employe-card rounded  w-35 p-2 text-white shadow">
            <div className="d-flex justify-content-between">
              <div>
                <div>
                  {/* <b> Employess</b> */}
                  <Link to="/employees" className="text-decoration-none  text-white">
                    <b>Employees</b>
                  </Link>
                </div>
                <div className="fs-4">
                  <b>700</b>
                </div>
              </div>
              <div className="fs-4 card text-primary ps-2 pe-2">
                <div className="fs-1">
                  <MdOutlinePeopleAlt />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between w-35 company-card p-2 rounded text-white  shadow">
            <div>
              <div>
                {/* <b>Companies</b> */}
                <Link to="/company" className="text-decoration-none  text-white">
                  <b>Companies</b>
                </Link>
              </div>
              <div className="fs-4">
                <b>9</b>
              </div>
            </div>
            <div className="card text-black">
              <div className="fs-1 company-icon-color ps-2 pe-2">
                <HiOutlineBuildingOffice2 />
              </div>
            </div>
          </div>
          <div className="leave-card rounded  w-35 p-2 text-white shadow">
            <div className="d-flex justify-content-between">
              <div>
                <div>
                  <b> Leaves</b>
                </div>
                <div className="fs-4">
                  <b>700</b>
                </div>
              </div>
              <div className="fs-4 card text-danger ps-2 pe-2">
                <div className="fs-1">
                  <ImExit />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="salary-card rounded  w-35 p-2 text-white shadow">
            <div className="d-flex justify-content-between">
              <div>
                <div>
                  <b> Salary</b>
                </div>
                <div className="fs-4">
                  <b> 700</b>
                </div>
              </div>
              <div className="fs-4 card text-success ps-2 pe-2">
                <div className="fs-1">
                  <GiTakeMyMoney />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
