import "./Payslip4.css";
import { React, useRef } from "react";
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
      <div className=" p-4 m-4  color">
        <div ref={componentRef} style={{ width: '100%' }}>
          <div className=" bg-white m-2 p-2  m-auto padding ">
            <div>
              <div className=" Larger ">
                <div className="w-100">
                  <div className="d-flex border1  w-100 ">
                    <div className=" w-50  ">
                      <img src={sss} alt="this is img" className="imege1 m-1 ms-4" />
                    </div>
                    <div className=" text-center w-50">
                      <h4>{payslipData.companyDetails.companyName}</h4>
                      <h6>{payslipData.companyDetails.addressLine1}, {payslipData.companyDetails.addressLine2},{payslipData.companyDetails.state},  {payslipData.companyDetails.pinCode}.</h6>
                      <h6 className="p23">Pay Slip for the month of {payslipData.dateOfMonth} </h6>
                    </div>
                  </div>
                </div>
                <div className="mt-2 ">
                  <table className="w-100  ">
                    <tr>
                      <th >Emp Code</th>

                      <th>{payslipData.employeeData.empNo}</th>
                      <th>DOJ</th>
                      <th>{payslipData.employeeData.doj}</th>
                    </tr>
                    <tr>
                      <th> Global Id</th>

                      <th></th>

                      <th>Global DOJ</th>

                      <th></th>
                    </tr>
                    <tr>
                      <th>Emp Name</th>
                      <th>{payslipData.employeeData.empName}</th>
                      <th>DOB</th>
                      <th></th>
                    </tr>
                    <tr>
                      <th>Location</th>
                      <th></th>
                      <th>Gender</th>
                      <th></th>
                    </tr>

                    <tr>
                      <th>Unit Code</th>
                      <th></th>
                      <th>PAN</th>
                      <th>{payslipData.employeeData.pan}</th>
                    </tr>
                    <tr>
                      <th>Designation</th>
                      <th>{payslipData.employeeData.designation}</th>
                      <th>PF No</th>
                      <th></th>
                    </tr>
                    <tr>
                      <th>Bank Ac No</th>
                      <th>{payslipData.employeeData.bankAccount}</th>
                      <th>PF UAN</th>
                      <th></th>
                    </tr>

                    <tr>
                      <th>Bank Ac Name</th>
                      <th></th>
                      <th>EPS NO</th>
                      <th></th>
                    </tr>

                    <tr>
                      <th>Grade</th>
                      <th></th>
                      <th>ESI No</th>
                      <th></th>
                    </tr>

                    <tr>
                      <th colspan="7" className="payslip-bg  text-center">
                        Standard Days:31, Payable Days:31.00 ,Loss of Pay Days:0.00 ,
                        LOP Reversal Days:0.00 , Arrear Days:0.00
                      </th>
                    </tr>
                  </table>
                  <table className="w-100 ">
                    <tr>
                      <th>EARNINGS</th>

                      <th>MONTHLY RATE</th>

                      <th>CURRENT MONTH</th>

                      <th>ARREAR(+/-)</th>

                      <th>TOTAL</th>

                      <th>DEDUCTIONS</th>

                      <th>TOTAL</th>
                    </tr>

                    <tr>
                      <td>BASIC</td>

                      <td>{payslipData.basic}</td>

                      <td></td>

                      <td></td>

                      <td></td>

                      <td>P.F.</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>HOUSE RENT ALLOWANCE</td>

                      <td>{payslipData.hra}</td>

                      <td></td>

                      <td></td>

                      <td></td>
                      <td>PROFESSION TAX</td>
                      <td>{payslipData.professionalTax}</td>
                    </tr>
                    <tr>
                      <td>PERSONAL ALLOWANCE</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ADVANCE STATUTORY BONUS</td>
                      <td>{payslipData.bonus}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>REMOTE WORKING ALLOWANCE</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>BOOKS AND JOURNALS</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>PROFESSIONAL PURSUIT</td>

                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="text ">
                      <th>PROFESSIONAL PURSUIT</th>
                      <td></td>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>TOTAL DEDUCTIONS</th>
                      <th>{payslipData.totalDeduction}</th>
                    </tr>
                  </table>
                </div>
                <table className="w-100  text-start  ">
                  <tr >
                    <td>
                      <b> NET PAY :</b><span>  (...   RUPEES   ONLY)</span>
                    </td>

                    <td className="text-center"><b>{payslipData.netSalary}</b></td>
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
