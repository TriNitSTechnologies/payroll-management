import sss from  "../Image/logo-dark.png";
import './Payslip3.css';
export default function Payslip3(){
    return(
<>
<div className="w-100 ">
<div className=" w-75 border m-auto m-4 mt-4 p-4 shadow ">
    <div className="d-flex  w-100 h-100  ms-4">
        <div className=" w-50 p3h  ">
        <img src={sss} alt="this is img" className="imege nmr w-75 mt-2  ms-4 h-75 ms-3" />
        </div>
        <div className="  p3h text-center w-50">
            <h4><b>Trinits Technlogogies </b></h4>
            <h6><b>Naidupeta 0 Muncipality office,Nellore 0</b></h6>
          
            <h6><b>PINCode:524421,Andhra pradesh</b></h6>
        

        </div>

    </div>


    <div className=" mt-4 ">
        <table className='w-100  ms-4 p-4  '>
            <tr>
                <td className=" p3 text-center " colSpan="4"><b>Trinits Technlogogies</b></td>
            </tr>
        <tr>
            <th>EMP Name</th>
            <th></th>
            <th>EMP NO</th>
            <th></th>
        
        </tr>
        <tr>
          
        </tr>
        <tr>
          
            <td><b>Designation</b></td>
            <td><b>Software Engineer</b></td>
            <td><b>Bank Details</b></td>
            <td><b>50202238791</b></td>
        </tr>
        <tr>
         
            <td><b>PAN</b></td>
            <td><b>PAN 45298</b></td>
            <td><b>Date Of month/year</b></td>
            <td><b>2022-04-14</b></td>
        </tr>
        <tr>
            <td><b>NWD</b></td>
            <td><b>28</b></td>
            <td><b>Date of Joining</b></td>
            <td><b>2022-09-14</b></td>
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
            <td>11200</td>
            <td>Professional Tax</td>
            <td>200</td>
        </tr>
        <tr>
            <td>House Rent Allowance</td>
            <td>4480</td>
            <td>income Tax</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Conveyance Allowance </td>
            <td>1120</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Leave Travel Allowance </td>
            <td>1680</td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td>Medical Allowance</td>
            <td>840</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Special Allowance</td>
            <td>3920</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Education Allowance</td>
            <td>4480</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Bouns</td>
            <td>280</td>
            <td></td>
            <td></td>
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
