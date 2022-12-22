import { useSelector } from "react-redux";
import sss from "../Image/logo-dark.png";
import './Payslip3.css';
import { toast } from 'react-toastify';

import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
export default function Payslip3() {
    const payslipData = useSelector((state) => state.payslip.payslipData);
    const componentRef = useRef();
    const handleprint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data'
        //    onAfterPrint:()=>toast.success('Print success')

    });
    return (
        <>
<div className="p222 p-5 mb-5" >
            <div  ref={componentRef} style={{ width: '100%' }}>

                <div className="w-100  ">

                    <div className="w-100  border  aaa  m-auto mt-4 p-4  ">
                        <div className="d-flex w-100 h-100  ">
                            <div className=" w-50 p3h  ">
                                <img src={sss} alt="this is img" className="imege nmr w-75 mt-2   h-75 ms-3" />
                            </div>
                            <div className="  p3h text-center w-50">
                                <h4 ><b>{payslipData.companyDetails.companyName} </b></h4>
                                <h6><b>{payslipData.companyDetails.addressLine1}, {payslipData.companyDetails.addressLine2}, </b></h6>

                                <h6 ><b> {payslipData.companyDetails.pinCode},{payslipData.companyDetails.state}. </b></h6>
                                <h6><b>Pay Slip for the month of {payslipData.dateOfMonth}</b></h6>


                            </div>

                        </div>


                        <div className="     mt-4 ">
                            <table className='w-100   p-4  '>
                                <tr>
                                    <td className=" p3 text-center " colSpan="4"><b className="">Trinits Technlogogies</b></td>
                                </tr>
                                <tr>
                                    <th className="ps-2">EMP Name</th>
                                    <th className="ps-2">{payslipData.employeeData.empName}</th>
                                    <th className="ps-2">EMP NO</th>
                                    <th className="ps-2">{payslipData.employeeData.empNo}</th>

                                </tr>
                                <tr>

                                </tr>
                                <tr>

                                    <th className="ps-2">Designation</th>
                                    <th className="ps-2"> {payslipData.employeeData.designation}</th>
                                    <th className="ps-2">Bank Details</th>
                                    <th className="ps-2">{payslipData.employeeData.bankAccount}</th>
                                </tr>
                                <tr>

                                    <th className="ps-2">PAN</th>
                                    <th className="ps-2">{payslipData.employeeData.pan}</th>
                                    <th className="ps-2"> Date Of month/year</th>
                                    <th className="ps-2">{payslipData.dateOfMonth}</th>
                                </tr>
                                <tr>
                                    <th className="ps-2"><b>NWD</b></th>
                                    <th className="ps-2"><b>{payslipData.noOfWorkingDays}</b></th>
                                    <th className="ps-2"><b>Date of Joining</b></th>
                                    <th className="ps-2"> {payslipData.employeeData.doj}</th>
                                </tr>

                                <tr>
                                    <th className="text-center" colSpan="2"><b>Gross Earnings</b></th>

                                    <th className="text-center" colSpan="2"><b>Deducations</b></th>

                                </tr>
                                <tr >
                                    <th className="ps-2">Descripition</th>
                                    <th className="ps-2">Monthly Gross INR</th>
                                    <th className="ps-2">Deductions</th>
                                    <th className="ps-2">Monthly Deductions INR</th>

                                </tr>
                                <tr>
                                    <td className="ps-2">Basic</td>
                                    <td className="ps-2">{payslipData.basic}</td>
                                    <td className="ps-2">Professional Tax</td>
                                    <td className="ps-2">{payslipData.professionalTax}</td>
                                </tr>
                                <tr>
                                    <td className="ps-2">House Rent Allowance</td>
                                    <td className="ps-2">{payslipData.hra}</td>
                                    <td className="ps-2">income Tax</td>
                                    <td className="ps-2">{payslipData.incomeTax}</td>
                                </tr>
                                <tr>
                                    <td className="ps-2">Conveyance Allowance </td>
                                    <td className="ps-2">{payslipData.convAllowance}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="ps-2">Leave Travel Allowance </td>
                                    <td className="ps-2">{payslipData.leaveTravelAllowance}</td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td className="ps-2">Medical Allowance</td>
                                    <td className="ps-2">{payslipData.medicalAllowance}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="ps-2">Special Allowance</td>
                                    <td className="ps-2">{payslipData.specialAllowance}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="ps-2">Education Allowance</td>
                                    <td className="ps-2">{payslipData.edAllowance}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="ps-2">Bouns</td>
                                    <td className="ps-2">{payslipData.bonus}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="ps-2"><b>Gross Total :</b></td>
                                    <td className="ps-2"><b>{payslipData.totalSalary}</b></td>
                                    <td className="ps-2"><b>Net Salary :</b></td>
                                    <td className="ps-2"><b>{payslipData.netSalary}</b></td>
                                </tr>
                            </table>
                            <div>

                                <h6 className="foot text-center mt-3 bg-success w-100 "><b>Note:This is a system generated payslip and does not require seal of
                                    signature</b></h6>
                            </div>
                        </div>
                    </div>
                 

                </div>
              
            </div>

         
            </div>



        </>
    )
}
