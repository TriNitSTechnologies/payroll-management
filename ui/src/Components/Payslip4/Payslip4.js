import "./Payslip4.css";


import { React } from "react";
 import telegram from "./../../Image/trinits.jpg";

function Payslip4() {
  return (
    <div className=" bg-white w-80  m-auto padding p-5 mb-5">
      <div>
        <div className="   Larger    ">
          <div>
            <table className="w-100 border">
              <tr>
                <th className="d-flex">
                  <div>
                    <tr>
                      <th>
                        {" "}
                        <img className="payslip-logo" src={telegram} alt="" />
                      </th>
                    </tr>
                  </div>
                  <div className="ms-5 text-center">
                    <h4>TRINITS TECHNOLOGY SERVICES INDIA LIMITED</h4>
                    <div>Plot No. 14,Rajiv Infotech Park,</div>
                    <div>Hinjawadi Phase-3,MIDC-SEZ, Village Man,</div>
                    <span>Taluka Mulshi,PUNE-411057</span>
                    <span>Payslip for the month of AUGUST 2022</span>
                  </div>
                </th>
              </tr>
            </table>
          </div>
          <div className=" mt-3 ">
            <table className="w-100  ">
            
              <tr >
               
                <th className="p-2">Emp Code</th>
   
                <th  className="p-2">46238707</th>
                <th  className="p-2">DOJ</th>
                <th  className="p-2">26/05/2022</th>
               
              </tr>
             
              <tr>
                <th className="p-2"> Global Id</th>
              
                <th className="p-2">46238707</th>
             
                <th className="p-2">Global DOJ</th>
           
                <th className="p-2">26/05/2022</th>
              </tr>
              <tr>
                <th className="p-2">Emp Name</th>
                <th className="p-2">BADUGU VENKAIAH</th>
                <th className="p-2">DOB</th>
                <th className="p-2">05/06/1993</th>
              </tr>
              <tr>
                <th className="p-2">Location</th>
                <th className="p-2">CHN-3</th>
                <th className="p-2">Gender</th>
                <th className="p-2">M</th>
              </tr>

              <tr>
                <th className="p-2">Unit Code</th>
                <th className="p-2">FTE</th>
                <th className="p-2">PAN</th>
                <th className="p-2">BKGPV0823D</th>
              </tr>

              <tr>
                <th className="p-2">Designation</th>
                <th className="p-2">Process Lead</th>
                <th className="p-2">PF No</th>
                <th className="p-2">MHBAN00187340000593883</th>
              </tr>

              <tr>
                <th className="p-2">Bank Ac No</th>
                <th className="p-2">50100218500451</th>
                <th className="p-2">PF UAN</th>
                <th className="p-2">101517220852</th>
              </tr>

              <tr>
                <th className="p-2">Bank Ac Name</th>
                <th className="p-2">HDFC BANK LIMITED</th>
                <th className="p-2">EPS NO</th>
                <th className="p-2">MHBAN00187340000593883</th>
              </tr>

              <tr>
                <th className="p-2">Grade</th>
                <th className="p-2">B1</th>
                <th className="p-2">ESI No</th>
                <th className="p-2"></th>
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
                <th className="p-2">EARNINGS</th>

                <th className="p-2">MONTHLY RATE</th>

                <th className="p-2">CURRENT MONTH</th>

                <th className="p-2">ARREAR(+/-)</th>

                <th className="p-2">TOTAL</th>

                <th className="p-2">DEDUCTIONS</th>

                <th className="p-2">TOTAL</th>
              </tr>

              <tr>
                <td className="p-2">BASIC</td>

                <td className="p-2">15,313</td>

                <td className="p-2">15,313</td>

                <td className="p-2">0</td>

                <td className="p-2">15,313</td>

                <td className="p-2">P.F.</td>
                <td className="p-2">1,838</td>
              </tr>

              <tr>
                <td className="p-2">HOUSE RENT ALLOWANCE</td>

                <td className="p-2">9,188</td>

                <td className="p-2">9,188</td>

                <td className="p-2">0</td>

                <td className="p-2">9,188</td>
                <td className="p-2">PROFESSION TAX</td>
                <td className="p-2">1,250</td>
              </tr>
              <tr>
                <td className="p-2">PERSONAL ALLOWANCE</td>

                <td className="p-2">6,194</td>
                <td className="p-2">6,194</td>
                <td className="p-2">0</td>
                <td className="p-2">6,194</td>
                <td></td>
              </tr>
              <tr>
                <td className="p-2">ADVANCE STATUTORY BONUS</td>

                <td className="p-2">2,200</td>
                <td className="p-2">2,200</td>
                <td className="p-2">0</td>
                <td className="p-2">2,200</td>
                <td ></td>
              </tr>
              <tr>
                <td className="p-2">REMOTE WORKING ALLOWANCE</td>

                <td className="p-2">3000</td>
                <td className="p-2">3000</td>
                <td className="p-2">0</td>
                <td className="p-2">3000</td>
                <td></td>
              </tr>
              <tr>
                <td className="p-2">BOOKS AND JOURNALS</td>

                <td className="p-2">3000</td>
                <td className="p-2">3000</td>
                <td className="p-2">0</td>
                <td className="p-2">3000</td>
                <td></td>
              </tr>
              <tr>
                <td className="p-2">PROFESSIONAL PURSUIT</td>

                <td className="p-2">2,282</td>
                <td className="p-2">2,282</td>
                <td className="p-2">0</td>
                <td className="p-2">2,282</td>
                <td></td>
              </tr>
              <tr className="text">
                <th className="p-2">PROFESSIONAL PURSUIT</th>
                <td></td>
                <th className="p-2">41,177</th>
                <th className="p-2">0</th>
                <th className="p-2">41,177</th>
                <th className="p-2">TOTAL DEDUCTIONS</th>
                <th className="p-2">3,088</th>
              </tr>
            </table>
          </div>
          <table className="w-100 mt-2 text-start  ">
            <tr>
              <th className="p-2">
                NET PAY <br /> (RUPEES THIRTY EIGHT THOUSAND EIGHTY NINE ONLY)
              </th>

              <th className="text-center">38,089</th>
            </tr>
          </table>

         
        </div>
      </div>
    </div>
  );
}
export default Payslip4;
