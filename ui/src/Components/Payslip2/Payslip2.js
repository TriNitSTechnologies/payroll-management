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
        // onAfterPrint:()=>toast.success('Print success '),
    });

    return (
        <>
            <div className="ptn mt-4">

                <div className=" ptn2" ref={componentRef}>

                    <ToastContainer />
                    <div className="w-100 border p222  text center">
                    
                        <div className=" w-75 shadow aaa  m-auto p-2 ">
                            <div className=" p2header  d-flex   ">
                                <div className="p2header1 w-25">
                                    <img src={sss} alt="this is img" className="imege w-75 mt-2 ms-3" />
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
                            <div className="p2body mt-1">

                                <table className=" w-100">
                                    <tbody>
                                        <tr>
                                            <th className="w-25 ps-2">Emp Code</th>
                                            <th className="w-25 text-center ps-2" colspan="2">{payslipData.employeeData.empNo}</th>

                                            <th className="w-25 ps-2" >Name</th>
                                            <th className="text-center" colspan="2">{payslipData.employeeData.empName}</th>

                                        </tr>
                                        <tr >
                                            <td className="ps-2"> <b>Date of Joining</b></td>
                                            <td className="text-center" colspan="2">{payslipData.employeeData.doj}</td>

                                            <td className="ps-2"> <b>Designation</b></td>
                                            <td className="text-center" colspan="2">{payslipData.employeeData.designation}</td>

                                                 </tr>
                                        <tr>
                                            <td className="ps-2"><b>Bank Name</b> </td>
                                            <td className="text-center" colspan="2"></td>

                                            <td className="ps-2"><b> Bank A/c No</b></td>
                                            <td className="text-center" colspan="2">{payslipData.employeeData.bankAccount}

                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="ps-2"><b>LOP Credit days</b>   </td>
                                            <td className="text-center" colspan="2"><b></b></td>

                                            <td className="ps-2"><b>LOP Debit Days</b></td>
                                            <td className="text-center" colspan="2"><b></b></td>


                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2"><b>PF Number </b> </td>
                                            <td className="text-center" colspan="2"> </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>


                                        </tr>
                                        <tr className="hii">
                                            <td className="ps-2">Earnings</td>
                                            <td className="ps-2">Amount <br></br>
                                                (Rs)</td>
                                            <td className="ps-2">Cumulative <br></br> (Rs)</td>

                                            <td className="ps-2">Deductions</td>
                                            <td className="ps-2">Amount (Rs)</td>
                                            <td className="ps-2">Cumulative(Rs)</td>
                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2 ssn">Basic
                                            </td>
                                            <td className=" text-center">{payslipData.basic}</td>
                                            <td> </td>
                                            <td> Provident Found</td>
                                            <td>  </td>
                                            <td>   </td>
                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2">House Rent Allowance</td>
                                            <td className=" text-center">{payslipData.hra}</td>
                                            <td></td>
                                            <td> Tax Deducted at Source</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2">Conveyance Allowance</td>
                                            <td className=" text-center">{payslipData.convAllowance}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2">Medical Reimbursement</td>
                                            <td className=" text-center">{payslipData.medicalAllowance}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2">Professional Development Allowance</td>
                                            <td className=" text-center">{payslipData.professionalTax}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2">Professional Attire Allowance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr className="hi">
                                            <td className="ps-2">Leave Travel Allowance</td>
                                            <td className=" text-center">{payslipData.leaveTravelAllowance}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr className="hi">
                                            <td className="ps-2"><b>Gross Total</b></td>
                                            <td className="text-center"><b>{payslipData.totalSalary}</b></td>
                                            <td></td>
                                            <td className="ps-2"><b>Total Deductions</b></td>
                                            <td className=" text-center"> {payslipData.totalDeduction}</td>
                                            <td></td>
                                        </tr>
                                        <tr className="hi hee">
                                            <td className="ps-2" colSpan="6" ><b>Net Pay :</b>   <span className="ps-3 "><b>RS.  {payslipData.netSalary}</b> </span> </td>
                                          </tr>
                                        <tr className=" hi hee">
                                            <td className="ps-2" colSpan="6" ><b>In Words: Rupees ... Only.</b></td>

                                        </tr>
                                        <tr className=" hi hee">
                                            <td className="ps-2" colSpan="6" ><b>Remarks :</b></td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <div className="p2footer ">

                                <b>This is a computer generated Pay Slip. Signature is not required.

                                    Your salary is strictly confidential and you are expected to maintain its confidentiality. Company reserves the right to take disciplinary action as appropriate in case of breach of confidence.01-November-2022.</b>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
