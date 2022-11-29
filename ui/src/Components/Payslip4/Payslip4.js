import "./Payslip4.css";
import { React,useRef } from "react";
// import telegram from "./../Image/trinits.jpg";
import sss from "../Image/logo-dark.png";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useReactToPrint } from "react-to-print";
function Payslip4() {
 const payslipData= useSelector((state)=>state.payslip.payslipData);
 const componentRef=useRef();
 const handleprint=useReactToPrint({
    content:()=> componentRef.current,
    documentTitle:'emp-data',
    onAfterPrint:()=>toast.success('Print success')

 });
  return (
<>
<div className="mt-4">
   
        <div ref={componentRef} style={{width:'100%'}}>
    <div className=" bg-white w-80  m-auto padding p-5 mb-5">
      <div>
        <div className="   Larger    ">
          <div>
            <table className="w-100 ">
              <tr>
                <th className="d-flex">
                  <div className=" w-25 ">
                    <tr>
                      <th>
                                <img src={sss} alt="this is img" className="imege1 ms-3" />
                           
                        {/* <img className="payslip-logo" src= {telegram} alt="" /> */}
                      
                        {/* <img src={sss} alt="this is img" className="imege " /> */}
                      </th>
                    </tr>
                  </div>
                  <div className="ms-5 text-center w-75">
                    <h4>{payslipData.companyDetails.companyName}</h4>
                    <h5 className="">{payslipData.companyDetails.addressLine1}, {payslipData.companyDetails.addressLine2},{payslipData.companyDetails.state},  {payslipData.companyDetails.pinCode}.</h5>
                     <h6 className="p23">Pay Slip for the month of {payslipData.dateOfMonth} </h6>
                     </div>
                </th>
              </tr>
            </table>
          </div>
          <div className=" mt-3 ">
            <table className="w-100  ">
              <tr>
                <th className="p-2">Emp Code</th>

                <th className="p-2">{payslipData.employeeData.empNo}</th>
                <th className="p-2">DOJ</th>
                <th className="p-2">{payslipData.employeeData.doj}</th>
              </tr>

              <tr>
                <th className="p-2"> Global Id</th>

                <th className="p-2"></th>

                <th className="p-2">Global DOJ</th>

                <th className="p-2"></th>
              </tr>
              <tr>
                <th className="p-2">Emp Name</th>
                <th className="p-2">{payslipData.employeeData.empName}</th>
                <th className="p-2">DOB</th>
                <th className="p-2"></th>
              </tr>
              <tr>
                <th className="p-2">Location</th>
                <th className="p-2"></th>
                <th className="p-2">Gender</th>
                <th className="p-2"></th>
              </tr>

              <tr>
                <th className="p-2">Unit Code</th>
                <th className="p-2"></th>
                <th className="p-2">PAN</th>
                <th className="p-2">{payslipData.employeeData.pan}</th>
              </tr>

              <tr>
                <th className="p-2">Designation</th>
                <th className="p-2">{payslipData.employeeData.designation}</th>
                <th className="p-2">PF No</th>
                <th className="p-2"></th>
              </tr>

              <tr>
                <th className="p-2">Bank Ac No</th>
                <th className="p-2">{payslipData.employeeData.bankAccount}</th>
                <th className="p-2">PF UAN</th>
                <th className="p-2"></th>
              </tr>

              <tr>
                <th className="p-2">Bank Ac Name</th>
                <th className="p-2"></th>
                <th className="p-2">EPS NO</th>
                <th className="p-2"></th>
              </tr>

              <tr>
                <th className="p-2">Grade</th>
                <th className="p-2"></th>
                <th className="p-2">ESI No</th>
                <th className="p-2"></th>
              </tr>

              <tr>
                <th colspan="7" className="text bg-secondary text-center">
                  Standard Days:31, Payable Days:31.00 ,Loss of Pay Days:0.00 ,
                  LOP Reversal Days:0.00 , Arrear Days:0.00
                </th>
              </tr>
            </table>
            <table className="w-100 ">
              <tr>
                <th className="p-2">EARNINGS</th>

                <th className="p-2">MONTHLY RATE</th>

                <th className="p-2">CURRENT MONTH</th>

                <th className="p-2">ARREAR(+/-)</th>

                <th className="p-2">TOTAL</th>

                <th className="p-2">DEDUCTIONS</th>

                <th className="p-2">TOTAL</th>
              </tr>

              <tr>
                <td className="p-2">BASIC</td>

                <td className="p-2">{payslipData.basic}</td>

                <td className="p-2"></td>

                <td className="p-2"></td>

                <td className="p-2"></td>

                <td className="p-2">P.F.</td>
                <td className="p-2"></td>
              </tr>

              <tr>
                <td className="p-2">HOUSE RENT ALLOWANCE</td>

                <td className="p-2">{payslipData.hra}</td>

                <td className="p-2"></td>

                <td className="p-2"></td>

                <td className="p-2"></td>
                <td className="p-2">PROFESSION TAX</td>
                <td className="p-2">{payslipData.professionalTax}</td>
              </tr>
              <tr>
                <td className="p-2">PERSONAL ALLOWANCE</td>

                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td></td>
              </tr>
              <tr>
                <td className="p-2">ADVANCE STATUTORY BONUS</td>

                <td className="p-2">{payslipData.bonus}</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td></td>
              </tr>
              <tr>
                <td className="p-2">REMOTE WORKING ALLOWANCE</td>

                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td></td>
              </tr>
              <tr>
                <td className="p-2">BOOKS AND JOURNALS</td>

                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td></td>
              </tr>
              <tr>
                <td className="p-2">PROFESSIONAL PURSUIT</td>

                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td></td>
              </tr>
              <tr className="text">
                <th className="p-2">PROFESSIONAL PURSUIT</th>
                <td></td>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2">TOTAL DEDUCTIONS</th>
                <th className="p-2">{payslipData.totalDeduction}</th>
              </tr>
            </table>
          </div>
          <table className="w-100 mt-2 text-start  ">
            <tr>
              <th className="p-2">
                NET PAY <br /> (RUPEES THIRTY EIGHT THOUSAND EIGHTY NINE ONLY)
              </th>

              <th className="text-center">{payslipData.netSalary}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  
    </div>
    </div>

</>
  

  );
}
export default Payslip4;
