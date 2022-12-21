import img from './Trinits.jpg'
import './payslip5.css';
import { useSelector } from "react-redux";


export default function Payslip5(){
    const payslipData= useSelector((state)=>state.payslip.payslipData);
    return(
        <div>
              

            <div className=' w-100 p222  m-auto padding p-5 mb-5'>
            <div className=' m-auto bg-white padding p-5 mb-5 w-80 shadow'>
                <div className='w-100   d-flex '>
                    <div className='w-20'>
                    {<img src={img}  width={250} height={100}/>}
                    </div>
                    <div className='text-center w-50 m-auto'>
                        <h2>{payslipData.companyDetails.companyName} </h2>
                        <h6>{payslipData.companyDetails.addressLine1}, {payslipData.companyDetails.addressLine2}, {payslipData.companyDetails.state},  {payslipData.companyDetails.pinCode}.</h6>
                        <h4>Payslip for the month of {payslipData.dateOfMonth}</h4>
                    </div>
                </div>
                <div className='w-100  border1'>
                    <div className='d-flex '>
                        <div className='w-50 d-flex border-right'>
                            <div className='w-50 m-2'>
                                <div>Name:</div>
                                <div>Joining Date:</div>
                                <div>Designation:</div>
                                <div>Department:</div>
                                <div>Location:</div>
                                <div>Effctive Work Days:</div>
                                <div>LOP:</div>
                                <div>OTHERS:</div>

                            </div>
                            <div className='w-50 m-2'>
                                <div>{payslipData.employeeData.empName}</div>
                                <div>07 Feb 2022</div>
                                <div>{payslipData.employeeData.designation}</div>
                                <div>Gumps</div>
                                <div>{payslipData.companyDetails.addressLine1}</div>
                                <div>{payslipData.noOfWorkingDays}</div>
                                <div>0</div>
                                <div>0</div>
                            </div>
                        </div>
                        <div className='w-50 d-flex'>
                            <div className='w-50 m-2'>
                                <div>Employee No:</div>
                                <div>Bank Name:</div>
                                <div>Bank Account No:</div>
                                <div>PAN Number:</div>
                                <div>PF No:</div>
                                <div>PF UAN:</div>
                                <div>SL Closing Balance:</div>
                                <div>PL Closing Balance:</div>

                            </div>
                            <div className='w-50 m-2'>
                                <div>{payslipData.employeeData.empNo}</div>
                                <div>Indian Bank</div>
                                <div><br></br></div>
                                <div><br></br></div>
                                <div>TN/MAS/1569888/000/0010344</div>
                                <div><br></br></div>
                                <div>0.5</div>
                                <div>0.5</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-100  border1 '>
                    <div className='d-flex'>
                        <div className='w-50 d-flex border-right'>
                            <div className='w-70 '>
                                <div className='fw-bold text-center'>Earnings</div>
                            </div>
                            <div className='w-15'>
                                <div className='fw-bold'>Full</div>
                            </div>
                            <div className='w-15'>
                                <div className='fw-bold'>Actual</div>

                            </div>
                        </div>
                        <div className='w-50 d-flex'>
                            <div className='w-75 fw-bold text-center'>Deductions</div>
                            <div className='w-25 fw-bold'>Actual</div>

                        </div>
                    </div>
                </div>

                <div className='w-100  border1 '>
                    <div className='d-flex'>
                        <div className='w-50 d-flex border-right'>
                            <div className='w-70 m-2 '>

                                <div>BASIC</div>
                                <div>HRA</div>
                                <div>SPECIAL ALLOWANCE</div>
                                <div>LTA</div>
                                <div>BUSINESS ATTIRE</div>
                                <div>FOOD COUPON</div>
                                <div>BOOKS AND PERIODICALS</div>
                                <div>PROFESSIONAL ALLOWANCE</div>


                            </div>
                            <div className='w-15 m-2'>

                                <div>{payslipData.basic}</div>
                                <div>{payslipData.hra}</div>
                                <div>{payslipData.specialAllowance}</div>
                                <div>{payslipData.medicalAllowance}</div>
                                <div><br></br></div>
                                <div><br></br></div>
                                <div><br></br></div>
                                <div>{payslipData.convAllowance}</div>


                            </div>
                            <div className='w-15 m-2'>


                                <div>{payslipData.basic}</div>
                                <div>{payslipData.hra}</div>
                                <div>{payslipData.specialAllowance}</div>
                                <div>{payslipData.medicalAllowance}</div>
                                <div><br></br></div>
                                <div><br></br></div>
                                <div><br></br></div>
                                <div>{payslipData.convAllowance}</div>

                            </div>
                        </div>
                        <div className='w-50 d-flex'>
                            <div className='w-75 m-2'>
                                <div>PF</div>
                                <div>PROF TAX</div>
                            </div>
                            <div className='w-25 m-2'>
                                <div><br></br></div>
                                <div>{payslipData.professionalTax}</div>
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
                                <div>{payslipData.totalSalary}</div>

                            </div>
                        </div>
                        <div className='w-50 d-flex'>
                            <div className='w-75 m-2'><b>Total Deductions:INR</b></div>
                            <div className='w-25 m-2'>{payslipData.totalDeduction}</div>

                        </div>
                    </div>
                </div>
                <div className='w-100  border1'>
                    <div>Net Pay for the month ( Total Earnings - Total Deductions):<b>  {payslipData.netSalary}</b></div>
                    <div className='fst-italic'>({payslipData.netSalary})</div>
                </div>
                <div className='text-center'>This is system generated payslip and does not require signature</div>
            </div>
            
        </div>
        </div>
    )
}