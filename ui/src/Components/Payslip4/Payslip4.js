import "./Payslip4.css";
import { React, useRef } from "react";
// import telegram from "./../Image/trinits.jpg";
import sss from "../Image/logo-dark.png";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useReactToPrint } from "react-to-print";
function Payslip4() {
  const payslipData = useSelector((state) => state.payslip.payslipData);
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => toast.success('Print success')

  });
  return (
    <>
      <div className="mt-4 p-5 mb-5 p222">

        <div ref={componentRef} style={{ width: '100%' }}>
          <div className=" bg-white w-75  m-auto padding p-5 mb-5">
            <div>
              <div className=" Larger ">
                <div className="w-100">

                  
                    <div className="d-flex border1  w-100 ">
                      <div className=" w-50  ">
                     

                          <img src={sss} alt="this is img" className="imege1 ms-3" />

                          {/* <img className="payslip-logo" src= {telegram} alt="" /> */}

                    
                      </div>
                      <div className=" text-center w-50">
                        <h4>{payslipData.companyDetails.companyName}</h4>
                        <h6 className="">{payslipData.companyDetails.addressLine1}, {payslipData.companyDetails.addressLine2},{payslipData.companyDetails.state},  {payslipData.companyDetails.pinCode}.</h6>
                        <h6 className="p23">Pay Slip for the month of {payslipData.dateOfMonth} </h6>
                      </div>
                    </div>
                 

                </div>
                <div className=" mt-3 ">
                  <table className="w-100  ">
                    <tr>
                      <th className="">Emp Code</th>

                      <th className="">{payslipData.employeeData.empNo}</th>
                      <th className="">DOJ</th>
                      <th className="">{payslipData.employeeData.doj}</th>
                    </tr>

                    <tr>
                      <th className=""> Global Id</th>

                      <th className=""></th>

                      <th className="">Global DOJ</th>

                      <th className=""></th>
                    </tr>
                    <tr>
                      <th className="">Emp Name</th>
                      <th className="">{payslipData.employeeData.empName}</th>
                      <th className="">DOB</th>
                      <th className=""></th>
                    </tr>
                    <tr>
                      <th className="">Location</th>
                      <th className=""></th>
                      <th className="">Gender</th>
                      <th className=""></th>
                    </tr>

                    <tr>
                      <th className="">Unit Code</th>
                      <th className=""></th>
                      <th className="">PAN</th>
                      <th className="">{payslipData.employeeData.pan}</th>
                    </tr>

                    <tr>
                      <th className="">Designation</th>
                      <th className="">{payslipData.employeeData.designation}</th>
                      <th className="">PF No</th>
                      <th className=""></th>
                    </tr>

                    <tr>
                      <th className="">Bank Ac No</th>
                      <th className="">{payslipData.employeeData.bankAccount}</th>
                      <th className="">PF UAN</th>
                      <th className=""></th>
                    </tr>

                    <tr>
                      <th className="">Bank Ac Name</th>
                      <th className=""></th>
                      <th className="">EPS NO</th>
                      <th className=""></th>
                    </tr>

                    <tr>
                      <th className="">Grade</th>
                      <th className=""></th>
                      <th className="">ESI No</th>
                      <th className=""></th>
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
                      <th className="">EARNINGS</th>

                      <th className="">MONTHLY RATE</th>

                      <th className="">CURRENT MONTH</th>

                      <th className="">ARREAR(+/-)</th>

                      <th className="">TOTAL</th>

                      <th className="">DEDUCTIONS</th>

                      <th className="">TOTAL</th>
                    </tr>

                    <tr>
                      <td className="">BASIC</td>

                      <td className="">{payslipData.basic}</td>

                      <td className=""></td>

                      <td className=""></td>

                      <td className=""></td>

                      <td className="">P.F.</td>
                      <td className=""></td>
                    </tr>

                    <tr>
                      <td className="">HOUSE RENT ALLOWANCE</td>

                      <td className="">{payslipData.hra}</td>

                      <td className=""></td>

                      <td className=""></td>

                      <td className=""></td>
                      <td className="">PROFESSION TAX</td>
                      <td className="">{payslipData.professionalTax}</td>
                    </tr>
                    <tr>
                      <td className="">PERSONAL ALLOWANCE</td>

                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="">ADVANCE STATUTORY BONUS</td>

                      <td className="">{payslipData.bonus}</td>
                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="">REMOTE WORKING ALLOWANCE</td>

                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="">BOOKS AND JOURNALS</td>

                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="">PROFESSIONAL PURSUIT</td>

                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="text ">
                      <th className="">PROFESSIONAL PURSUIT</th>
                      <td></td>
                      <th className=""></th>
                      <th className=""></th>
                      <th className=""></th>
                      <th className="">TOTAL DEDUCTIONS</th>
                      <th className="">{payslipData.totalDeduction}</th>
                    </tr>
                  </table>
                </div>
                <table className="w-100 mt-2  text-start  ">
                  <tr>
                    <th className="">
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
