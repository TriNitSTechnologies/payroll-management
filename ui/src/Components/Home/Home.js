import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im"
import { BsHouseFill } from "react-icons/bs";
function Home() {
   
  return (
    <div>
      <div className="dashboard-card p-5">
        <div className="rounded admin-card ">
          <div className="d-flex fs-4 justify-content-between  p-3 ">
            <div>
              <b> Welcome Admin</b>
            </div>
            <div>Sun,11,2022</div>
          </div>
        </div>
        <div className="d-flex mt-4">
          <div className="w-50">
            <div className="card me-3">
              <div className="d-flex justify-content-between p-3 ">
                <div> <span className="back p-2 rounded shadow ms-2"> <BsHouseFill /></span> Home / Dashboard</div>
                <div className="fs-4">Admin Dashboard</div>
              </div>
            </div>
            <div className="d-flex ">
              <div className="employe-card rounded  w-50 p-2 text-white me-3 mt-3">
                <div className="d-flex justify-content-between">
                  <div className="fs-4">
                    <div>
                      <b> Employess</b>
                    </div>
                    <div>
                      <b> 700</b>
                    </div>
                  </div>
                  <div className="fs-4 card text-primary ps-2 pe-2">
                    <div className="fs-1">
                    <MdOutlinePeopleAlt/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between w-50 company-card fs-4 p-2 rounded text-white mt-3 me-3">
                <div>
                  <div>Companies</div>
                  <div>30</div>
                </div>
                <div className="card text-black">
               <div className="fs-1 company-icon-color ps-2 pe-2">
               <HiOutlineBuildingOffice2/>
               </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50">
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
            <div className="d-flex mt-4 text-white">
              <div className="w-50 d-flex justify-content-between leave-card p-3 fs-4 me-3 rounded">
                <div>
                <div>Leaves</div>
                <div>9</div>
                </div>
                <div className="card  text-danger ps-2 pe-2">
                  <div className="fs-1">
                  <ImExit/>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between w-50 rounded p-3 fs-4 salary-card">
                <div>
                  <div>Salary</div>
                  <div>$5.8M</div>
                </div>
                <div className="card">
                  <div className="fs-1 ps-2 pe-3">
                  <GrMoney/>
                  </div>
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
