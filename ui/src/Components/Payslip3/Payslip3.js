import { useSelector } from "react-redux";
import sss from  "../Image/logo-dark.png";
import './Payslip3.css';
export default function Payslip3(){
    const payslipData= useSelector((state)=>state.payslip.payslipData);

    return(
<>
<div className="w-100 ">
<div className=" w-75 border m-auto m-4 mt-4 p-4 shadow ">
    <div className="d-flex  w-100 h-100  ms-4">
        <div className=" w-50 p3h  ">
        <img src={sss} alt="this is img" className="imege nmr w-75 mt-2  ms-4 h-75 ms-3" />
        </div>
        <div className="  p3h text-center w-50">
            <h4 ><b>Trinits Technlogogies </b></h4>
            <h6><b>Naidupeta 0 Muncipality office,Nellore 0</b></h6>
          
            <h6 ><b>PINCode:524421,Andhra pradesh</b></h6>
        

        </div>

    </div>


    <div className=" mt-4 ">
        <table className='w-100  ms-4 p-4  '>
            <tr>
                <td className=" p3 text-center " colSpan="4"><b className="">Trinits Technlogogies</b></td>
            </tr>
        <tr>
            <th>EMP Name</th>
            <th>{payslipData.employeeData.empName}</th>
            <th>EMP NO</th>
            <th>{payslipData.employeeData.empNo}</th>
        
        </tr>
        <tr>
          
        </tr>
        <tr>
          
            <th>Designation</th>
            <th> {payslipData.employeeData.designation}</th>
            <th>Bank Details</th>
            <th>{payslipData.employeeData.bankAccount}</th>
        </tr>
        <tr>
         
            <th>PAN</th>
            <th>{payslipData.employeeData.pan}</th>
            <th>Date Of month/year</th>
            <th>{payslipData.dateOfMonth}</th>
        </tr>
        <tr>
            <th><b>NWD</b></th>
            <th><b>{payslipData.noOfWorkingDays}</b></th>
            <th><b>Date of Joining</b></th>
            <th>{payslipData.employeeData.doj}</th>
        </tr>

        <tr>
            <th className="text-center"  colSpan="2"><b>Gross Earnings</b></th>
          
            <th  className="text-center" colSpan="2"><b>Deducations</b></th>
            
        </tr>
        <tr>
            <th>Descripition</th>
            <th>Monthly Gross INR</th>
            <th>Deductions</th>
            <th>Monthly Deductions INR</th>

        </tr>
        <tr>
            <td>Basic</td>
            <td>{payslipData.basic}</td>
            <td>Professional Tax</td>
            <td>{payslipData.professionalTax}</td>
        </tr>
        <tr>
            <td>House Rent Allowance</td>
            <td>{payslipData.hra}</td>
            <td>income Tax</td>
            <td>{payslipData.incomeTax}</td>
        </tr>
        <tr>
            <td>Conveyance Allowance </td>
            <td>{payslipData.convAllowance}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Leave Travel Allowance </td>
            <td>{payslipData.leaveTravelAllowance}</td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td>Medical Allowance</td>
            <td>{payslipData.medicalAllowance}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Special Allowance</td>
            <td>{payslipData.specialAllowance}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Education Allowance</td>
            <td>{payslipData.edAllowance}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Bouns</td>
            <td>{payslipData.bonus}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><b>Gross Total :</b></td>
            <td><b>{payslipData.totalSalary}</b></td>
            <td><b>Net Salary :</b></td>
            <td><b>{payslipData.netSalary}</b></td>
        </tr>
        </table>
        <div>

            <h6 className="foot text-center mt-3 bg-success w-100 ms-4"><b>Note:This is a system generated payslip and does not require seal of
                signature</b></h6>
        </div>
    </div>
</div>

</div>


 
    </>
    )
}
