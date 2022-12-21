import './payslip6.css';
import img from './Trinits.jpg';
import { useSelector } from "react-redux";


export default function Payslip6(){
    const payslipData= useSelector((state)=>state.payslip.payslipData);
    
       

    return(
        <>
        <div className=' w-100   m-auto padding p-5 mb-5'>
        <div className=' m-auto  padding p-5 mb-5 shadow w-90 bg-light'>
        <div className='w-80   d-flex '>
                    <div className='w-20'>
                    {<img src={img}  width={150} height={120}/>}
                    </div>
                    <div className=' w-100 m-auto text-center'>
                        <h2>{payslipData.companyDetails.companyName} </h2>
                        <h6>{payslipData.companyDetails.addressLine1}, {payslipData.companyDetails.addressLine2}, {payslipData.companyDetails.state},  {payslipData.companyDetails.pinCode}.</h6>
                        <h4>Payslip for the month of {payslipData.dateOfMonth}</h4>
                    </div>
                </div>
            
            <table>
            <tr>
                <td>Employee No:</td>
                <td>{payslipData.employeeData.empNo}</td>
                <td>Location:</td>
                <td>{payslipData.companyDetails.addressLine1}</td>

            </tr>
            <tr>
                <td>Name:</td>
                <td>{payslipData.employeeData.empName}</td>
                <td>Department:</td>
                <td>CTO-Office</td>
            </tr>
            <tr>
                <td>Date of Joining:</td>
                <td>15 Jul 2022</td>
                <td>Designation:</td>
                <td>{payslipData.employeeData.designation}</td>
            </tr>
            <tr>
                <td>Bank Name:</td>
                <td>HDFC</td>
                <td>Total Days:</td>
                <td> <br></br></td>
            </tr>
            <tr>
                <td>Bank Acc. No:</td>
                <td>98799876688</td>
                <td>LOP:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>PF No:</td>
                <td>BG/BNG/989989</td>
                <td>PF UAN:</td>
                <td>101779530896</td>
            </tr>
            <tr>
                <td>ESI No:</td>
                <td></td>
                <td>Work Days:</td>
                <td>30</td>
            </tr>
            <tr>
                <td>PAN No:</td>
                <td>EPPP0583H</td>
                <td>Effctive Work Days:</td>
                <td>{payslipData.noOfWorkingDays}</td>
            </tr>
            </table>
            
            <br></br>
            <div className='w-100  border1 '>
                    <div className='d-flex'>
                        <div className='w-50 d-flex border-right'>
                            <div className='w-70 '>
                                <div className='fw-bold'>Earnings</div>
                            </div>
                            
                            <div className='w-15'>
                                <div className='fw-bold'>Rs.</div>

                            </div>
                        </div>
                        <div className='w-50 d-flex'>
                            <div className='w-75 fw-bold '>Deductions</div>
                            <div className='w-25 fw-bold float-end'>Rs.</div>

                        </div>
                    </div>
                </div>

                <div className='w-100  border1 '>
                    <div className='d-flex'>
                        <div className='w-50 d-flex border-right'>
                            <div className='w-70 m-2 '>

                                <div>BASIC</div>
                                <div>HRA</div>
                                <div>FBP SALARY</div>
                                <div>BONUS</div>
                                <div>SPECIAL ALLOWANCE</div>
                                


                            </div>
                            <div className='w-15 m-2'>

                                <div>{payslipData.basic}</div>
                                <div>{payslipData.hra}</div>
                                <div>{payslipData.medicalAllowance}</div>
                                <div>{payslipData.specialAllowance}</div>
                                

                            </div>
                            <div className='w-15 m-2'>


                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div><br></br></div>
                                <div><br></br></div>
                                <div><br></br></div>
                                <div></div>

                            </div>
                        </div>
                        <div className='w-50 d-flex'>
                            <div className='w-75 m-2'>
                                <div>PF</div>
                                <div>INCOME TAX</div>
                                <div>PROF TAX</div>
                            </div>
                            <div className='w-25 m-2'>
                                <div><br></br></div>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-100  border1 '>
                    <div className='d-flex'>
                        <div className='w-50 d-flex border-right'>
                            <div className='w-70 m-2 '>
                                <div><b>Total Earnings:INR</b></div>
                            </div>
                            <div className='w-15 m-2'>
                                <div>{payslipData.totalSalary}</div>
                            </div>
                            <div className='w-15 m-2'>
                                <div></div>

                            </div>
                        </div>
                        <div className='w-50 d-flex'>
                            <div className='w-75 m-2'><b>Total Deductions:INR</b></div>
                            <div className='w-25 m-2'>{payslipData.totalDeduction}</div>

                        </div>
                    </div>
                </div>

            <div><b>Net Pay : Rs.  {payslipData.netSalary}</b>(Rupees .... Only)</div>

        </div>

        
        </div>
        </>

    )
}