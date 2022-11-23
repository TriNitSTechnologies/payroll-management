import { useSelector } from "react-redux";
import sss from  "../Image/logo-dark.png";
import './Payslip1.css';
export default function Payslip1() {
    const payslipData= useSelector((state)=>state.payslip.payslipData);
 
   
    return (
        <>
            <div className=" mann  w-100  m-auto  m-4 p-4">
                <div className=" mann2 m-auto shadow w-75  m-4 p-4">
                    <div className="header1 mt-2 m-auto ms-2 m-4 d-flex">
                        <div className=" header1a w-25 mt-1">
                         <img src={sss} alt="this is img" className="imege w-100  h-100 ms-3"/>
                        </div>
              
                        <div className="header1b w-75 ms-2  mt-1 text-center">
                            <h3 className="a">TriNitS Technologies Private Limited </h3>
                            <h6 className="b"> No. 6-2-204, Naidupeta, Andhra Pradesh, India - 524421.</h6>
                            <h6 className="b"></h6>
                            <h5 className="c">Pay Slip for the month of {payslipData.companyDetails.createdDate}</h5>
                        </div>
                    </div>
                    <div className="body1 mt-2 m-auto ms-2  d-flex">
                        <div className="body1a w-50 ">
                            <h5 className="aa ms-4 "><b>Emp No  </b><span className="text-black ps-2">: {payslipData.employeeData.empNo}</span></h5> 
                             <h5 className="bb  ms-4 "><b>Location</b> <span className="text-black ps-1">: {payslipData.companyDetails.addressLine1}</span> </h5>
                           
                      
</div>
                        <div className="body1b w-50">
                        <h5 className="  aa "><b> Name </b> <span className=" text-black ps-5 ms-4">: {payslipData.employeeData.empName}</span></h5> 
                        <h5 className=" aa "><b>Designation </b> <span className="text-black ps-3">:  {payslipData.employeeData.designation} </span> </h5>  

                        </div>
                    </div>
                    <div className="footer1 mt-2  ms-2">
                        <table className=" w-100 ">
                            <tbody>
                                <tr>
                                    <th className="w-25 ps-2 tthh">Earnings</th>
                                    <th className="w-25"></th>
                                    <th className="w-25  ps-2 tthh">Deductions</th>
                                    <th className="w-25"></th>
                                </tr>
                                <tr  className="hh ">
                                    <td  className="tdd ps-2">Basic</td>
                                    <td  className="text-center">{payslipData.basic}</td>
                                    <td  className="ps-2">Prof Tax</td>
                                    <td className="text-center">{payslipData.professionalTax}</td>
                                   
                                </tr>
                                <tr className="hh">
                                    <td className="ps-2">HRA</td>
                                    <td className="text-center">{payslipData.hra}</td>
                                    <td  className="ps-2">Other Ded</td>
                                    <td className="text-center"></td>
                                   
                                </tr>
                                <tr  className="hh">
                                    <td  className="ps-2">Conveyance</td>
                                    <td className="text-center">{payslipData.convAllowance}</td>
                                    <td className="text-center"></td>
                                    <td className="text-center"></td>
                                   
                                </tr>
                                <tr  className="hh">
                                    <td  className="ps-2">Special Allowance</td>
                                    <td className="text-center">{payslipData.specialAllowance}</td>
                                    <td></td>
                                    <td className="text-center"></td>
                                   
                                </tr>
                                <tr  className="hh">
                                    <td  className="ps-2">Medical</td>
                                    <td className="text-center">{payslipData.medicalAllowance}</td>
                                    <td></td>
                                    <td className="text-center"></td>
                                   
                                </tr>
                                <tr  className="hh">
                                    <td  className="ps-2"><b>Total Earnings</b></td>
                                    <td className="text-center"><b>{payslipData.totalSalary}</b></td>
                                    <td  className="ps-2"><b>Total Deductions</b></td>
                                    <td className="text-center"><b>{payslipData.totalDeduction}</b></td>
                                   
                                </tr>
                                <tr  className="hh">
                                    <td  className="ps-2">Workdays:</td>
                                    <td className="text-center">{payslipData.noOfWorkingDays}</td>
                                    <td  className="ps-2"><b>Net Pay :</b></td>
                                    <td className="text-center"><b>{payslipData.netSalary}</b></td>
                                   
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className=" net mt-4 text-center"><b>NET PAY:</b><span className="spn"> (Rupees ... Only)</span></div>
                </div>
            </div>
        </>
    )
}