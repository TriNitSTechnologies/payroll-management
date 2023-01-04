import "./Mainpage.css";
import { BsHouseFill } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbAddressBook } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi2";

export default function Mainbody() {
  return (
    <div>
      <div className="mainbackgroundnew">
        <div className="bgformimg">
          <h1 className="textp">SIMPLE, AFFORDABLE PAYROLL FOR</h1>
          <h1 className="textp  titalstyle"> SMALL BUSINESSES</h1>
        </div>
      </div>
      <div className="bgcolor mainbackground">
        <div className=" formbg">
          <h1 className="fontfamilystyle mt-4 ">
            A successful business starts with a successful team.
          </h1>
          <h6 className="text-center">
            Build an incredible workplace and grow your business with Gusto's
            all-in-one platform.
          </h6>
          <div className="w-75 m-auto">
            <h1 className="text-center mt-5">About</h1>
            <p className="textcolor p-1 mt-5">
              Notice: Information contained herein is not and should not be
              construed as an offer, solicitation, or recommendation to buy or
              sell securities. The information has been obtained from sources we
              believe to be reliable; however, no guarantee is made or implied
              with respect to its accuracy, timeliness, or completeness. Authors
              may own the stocks they discuss. The information and content are
              subject to change without notice. *Real-time prices indicates NSE
              stock prices. Real-time quotes and/or trade prices are not sourced
              from BSE.
            </p>
          </div>
        </div>
      </div>

      <div className="  bgcolor w-100 ">
        <div>
          <h6 className="fontfamilystyle text-center ">
            See how easy payroll and benefits can be.
          </h6>
        </div>
        <div>
          <h1 className="text-center">Our best features</h1>
          <p className="text-center">
            Below are some of the best features available in Trinits Technologies private limited.
          </p>
        </div>
        <div className="d-flex flex-wrap flex-row card-body">
          <div className="card m-4 p-4 text-center rounded  body-houver shadow">
            <div className="m-2 p-1">
            <BsHouseFill className="icon-size"/>
              <h5 className="mt-3">Dashboard</h5>
              <p>
              Trinits Dashboards+ revolutionizes the way information is viewed in the Quickbase reports dashboard by allowing the filtering of multiple reports at the same time.
              </p>
            </div>
          </div>
          <div className="card m-4 p-4  text-center rounded body-houver shadow">
            <div className="m-2 p-1">
            <HiOutlineBuildingOffice2 className="icon-size"/>
              <h5 className="mt-3">Companies</h5>
              <p>
                TriNits Technologies Pvt Ltd  develops the Web pages based on the customer requirements. Product development.
              </p>
            </div>
          </div>
          <div className="card m-4 p-4  text-center rounded  body-houver shadow">
            <div className="m-2 p-1">
            <TbAddressBook className="icon-size"/>
              <h5 className="mt-3">Reports</h5>
              <p>
              A data report is an analytical tool used to display past, present, and future data to efficiently track and optimize the performance of a company.
              </p>
            </div>
          </div>
          <div className="card m-4 p-4 text-center rounded  body-houver shadow">
            <div className="m-2 p-1">
            <HiDocumentText className="icon-size"/>
              <h5 className="mt-3">Documents</h5>
              <p className="">
              Several popular but necessary project documentation templates can help you in your project documentation process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
