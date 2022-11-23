import { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import Payslip1 from "../Payslip1/Payslip1";
import "./../../App.css";
import "./Payslips.css";
import { Tooltip } from 'primereact/tooltip';
import Payslip2 from "../Payslip2/Payslip2";
import Payslip3 from "../Payslip3/Payslip3";
import Payslip4 from "../Payslip4/Payslip4";
export default function Payslips() {
    const [value1, setValue1] = useState("Payslip1");
 const options = ["Payslip1", "Payslip2", "Payslip3","Payslip4"];
return (
        <>
        <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <div className="fs-5 ms-2"> Home /Payslips </div>
          </div>
          <div>
            <h4>Payslips</h4>
          </div>
        </div>
      </div>
            <div>
                <div className=" ms-4   button-content-width ">
                    <SelectButton   value={value1}
                        options={options}
                        onChange={(e) => setValue1(e.value)} />
             <Tooltip/>
             </div>
            </div>
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
             </>
               )
}
