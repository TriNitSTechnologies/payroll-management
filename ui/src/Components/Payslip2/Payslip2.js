import { useSelector } from "react-redux";
import sss from "../Image/logo-dark.png";
import { ToastContainer } from 'react-toastify';
import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import './Payslip2.css';
export default function Payslip2(props) {
    const payslipData = useSelector((state) => state.payslip.payslipData);
    const componentRef = useRef();
    const handleprint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data'
    });

    return (
        <>
            <div className="ptn color p-4 mb-3 ">
         

                <div className=" ptn2 svk " ref={componentRef}>

                    <ToastContainer />
                    <div className="w-100 border  text center">
                    
                        <div className=" w-100 shadow aaa   m-auto p-4 m-4 ">
                            <div className=" p2header  d-flex   ">
                                <div className="p2header1 w-25">
                                    <img src={sss} alt="ts is img" className="imege w-75 mt-2 ms-3" />
                                </div>
                                <div className="p2header2  w-50 "><h5 className="p22">{payslipData.companyDetails.companyName}

                                </h5>
                                    <h6 className="p23">{payslipData.companyDetails.addressLine1}, {payslipData.companyDetails.addressLine2},

                                    </h6>
                                    <h6 className="p23">  {payslipData.companyDetails.state},  {payslipData.companyDetails.pinCode}

                                    </h6>

                                </div>
                            </div>
                            <div className="p2pay  text-ceneter    ">
                                <h5 className="text-center"><b>PAY SLIP</b></h5>
                                <h6 className="text-center"><b>FOR THE MONTH OF November 2022</b></h6>
                            </div>
                            <div className="p2body ">

                                <table className=" w-100">
                                    <tbody>
                                        <tr>
                                            <th className="w-25 ps-1">Emp Code</th>
                                            <th className="w-25 text-center ps-1" colspan="2">{payslipData.employeeData.empNo}</th>

                                            <th className="w-25 ps-1" >Name</th>
                                            <th className="text-center" colspan="2">{payslipData.employeeData.empName}</th>

                                        </tr>
                                        <tr >
                                            <td className="ps-1"> <b>Date of Joining</b></td>
                                            <td className="text-center" colspan="2">{payslipData.employeeData.doj}</td>

                                            <td className="ps-1"> <b>Designation</b></td>
                                            <td className="text-center" colspan="2">{payslipData.employeeData.designation}</td>

                                                 </tr>
                                        <tr>
                                            <td className="ps-1"><b>Bank Name</b> </td>
                                            <td className="text-center" colspan="2"></td>

                                            <td className="ps-1"><b> Bank A/c No</b></td>
                                            <td className="text-center" colspan="2">{payslipData.employeeData.bankAccount}

                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="ps-1"><b>LOP Credit days</b>   </td>
                                            <td className="text-center" colspan="2"><b></b></td>

                                            <td className="ps-1"><b>LOP Debit Days</b></td>
                                            <td className="text-center" colspan="2"><b></b></td>
</tr>
                                        <tr >
                                            <td className="ps-1"><b>PF Number </b> </td>
                                            <td className="text-center" colspan="2"> </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>


                                        </tr>
                                        <tr >
                                            <td className="ps-1">Earnings</td>
                                            <td className="ps-1">Amount <br></br>
                                                (Rs)</td>
                                            <td className="ps-1">Cumulative <br></br> (Rs)</td>

                                            <td className="ps-1">Deductions</td>
                                            <td className="ps-1">Amount (Rs)</td>
                                            <td className="ps-1">Cumulative(Rs)</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-1 ssn">Basic
                                            </td>
                                            <td className=" text-center">{payslipData.basic}</td>
                                            <td> </td>
                                            <td> Provident Found</td>
                                            <td>  </td>
                                            <td>   </td>
                                        </tr>
                                        <tr>
                                            <td className="ps-1">House Rent Allowance</td>
                                            <td className=" text-center">{payslipData.hra}</td>
                                            <td></td>
                                            <td> Tax Deducted at Source</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="ps-1">Conveyance Allowance</td>
                                            <td className=" text-center">{payslipData.convAllowance}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr >
                                            <td className="ps-1">Medical Reimbursement</td>
                                            <td className=" text-center">{payslipData.medicalAllowance}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="ps-1">Professional Development Allowance</td>
                                            <td className=" text-center">{payslipData.professionalTax}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="ps-1">Professional Attire Allowance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="ps-1">Leave Travel Allowance</td>
                                            <td className=" text-center">{payslipData.leaveTravelAllowance}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td className="ps-1"><b>Gross Total</b></td>
                                            <td className="text-center"><b>{payslipData.totalSalary}</b></td>
                                            <td></td>
                                            <td className="ps-1"><b>Total Deductions</b></td>
                                            <td className=" text-center"> {payslipData.totalDeduction}</td>
                                            <td></td>
                                        </tr>
                                        <tr className="hee">
                                            <td className="ps-1" colSpan="6" ><b>Net Pay :</b>   <span className="ps-3 "><b>RS.  {payslipData.netSalary}</b> </span> </td>
                                          </tr>
                                        <tr className="hee">
                                            <td className="ps-1" colSpan="6" ><b>In Words: Rupees ... Only.</b></td>

                                        </tr>
                                        <tr className="hee">
                                            <td className="ps-1" colSpan="6" ><b>Remarks :</b></td>
                                              </tr>
                                               </tbody>
                                </table>
                             </div> 
                       <small><b>Ts is a computer generated Pay Slip. Signature is not required.

                                    Your salary is strictly confidential and you are expected to maintain its confidentiality. Company reserves the right to take disciplinary action as appropriate in case of breach of confidence.01-November-2022.</b></small>
        
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
