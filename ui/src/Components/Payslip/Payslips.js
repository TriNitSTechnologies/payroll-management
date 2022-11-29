import { useRef, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import Payslip1 from "../Payslip1/Payslip1";
import "./../../App.css";
import "./Payslips.css";
import { Tooltip } from 'primereact/tooltip';
import Payslip2 from "../Payslip2/Payslip2";
import Payslip3 from "../Payslip3/Payslip3";
import Payslip4 from "../Payslip4/Payslip4";
import { useReactToPrint } from "react-to-print";
import { BiPrinter } from "@react-icons/all-files/bi/BiPrinter";
import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
export default function Payslips() {
  const [value1, setValue1] = useState("Payslip1");
  const options = ["Payslip1", "Payslip2", "Payslip3", "Payslip4"];
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
      <div className="d-flex">
      
        <div className="suk">
          <div>
          <div className=" ms-4   button-content-width ">
            <SelectButton value={value1}
              options={options}
              onChange={(e) => setValue1(e.value)} />
            <Tooltip />
          </div>
        </div>
        <div  ref={componentRef} style={{ width: '100%' }}>
        {value1 === 'Payslip1' && <>
          <div>
            <Payslip1 />
          </div>
        </>}
        <div >
          {value1 === 'Payslip2' && <>
            <div >
              <Payslip2 />
            </div>
          </>
          }
        </div>
        {value1 === 'Payslip3' && <>
          <div>
            <Payslip3 />
          </div>
        </>
        }
        {value1 === 'Payslip4' && <>
          <div>
            <Payslip4 />
          </div>
          </>
        }
        </div>
        {value1 === '' && <>
          {/* <div>
          <button type="submit" className="btn btn-primary m-2 mt-2  " onClick={handleprint}><BiPrinter/> Print This Out</button>
          </div> */}
          </>
        }
        </div>
        <div className="su">
    
            <div className=" kk">
            <ReactTooltip />
              <button type="submit" className="btn btn-primary m-2 mt-2 " data-tip=" Payslip Button"  onClick={handleprint}> <BiPrinter className="  mr-3 text-bold " />Print </button>
            </div>
        
        </div>
        
        </div>
        
          
           
    </>
  )
}
