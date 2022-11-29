import { useRef, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import Payslip1 from "../Payslip1/Payslip1";
import "./../../App.css";
import "./Payslips.css";
import { Tooltip } from 'primereact/tooltip';
import Payslip2 from "../Payslip2/Payslip2";
import Payslip3 from "../Payslip3/Payslip3";
import Payslip4 from "../Payslip4/Payslip4";
import Payslip5 from "../payslip5/payslip5";
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import ReactTooltip from "react-tooltip";
import { BiPrinter } from "react-icons/bi";
export default function Payslips() {
  const [value1, setValue1] = useState("Payslip1");
  const options = ["Payslip 1", "Payslip 2", "Payslip 3", "Payslip 4", "Payslip 5"];
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data'
    // onAfterPrint:()=>toast.success('Print success')

  });
  return (
    <>
      <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">
              <button className="rounded shadow back me-2 ">
                <Link to="/home" className="text-decoration-none back">
                  <BsHouseFill />
                </Link>
              </button>
              <Link to="/home" className="text-decoration-none text-dark me-1">
                Home
              </Link>
              / Payslip
            </small>
          </div>
          <div>
            <h5> Payslips</h5>
          </div>
        </div>
      </div>



      <div className="d-flex border m-2 justify-content-between p-2">
        <div className="">
          <SelectButton value={value1}
            options={options}
            onChange={(e) => setValue1(e.value)} />
          <Tooltip />
        </div>
        <div className=" ">


          <ReactTooltip className="bg-danger" />
          <button type="submit" className="btn btn-primary p-2 ps-4 pe-5" data-tip=" Print Button" onClick={handleprint}> <BiPrinter className="  mr-3 text-bold " />Print </button>

        </div>
      </div>
      <div className=" d-flex ">
        <div ref={componentRef} style={{ width: '100%' }}>
          <div className="a1a ">


            {value1 === 'Payslip 1' && <>
              <div>
                <Payslip1 />
              </div>
            </>}
            <div >
              {value1 === 'Payslip 2' && <>
                <div >
                  <Payslip2 />
                </div>
              </>
              }
            </div>
            {value1 === 'Payslip 3' && <>
              <div>
                <Payslip3 />
              </div>
            </>
            }
            {value1 === 'Payslip 4' && <>
              <div>
                <Payslip4 />
              </div>
            </>
            }

            {value1 === 'Payslip 5' && (
              <>
                <div>
                  <Payslip5 />
                </div>
              </>
            )}
          </div>

        </div>


      </div>


    </>
  )

}
