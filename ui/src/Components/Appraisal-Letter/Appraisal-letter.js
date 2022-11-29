import { useRef } from 'react';
import './Appraisal-letter.css';
import {useReactToPrint} from 'react-to-print';



export default function AppraisalLetter(props){
    let appdataletter = props.appdataletter
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'appraisal data',
        onAfterPrint:()=>alert('printed successfully')
    });
    
    return(
        <>
        
        <div className="p-2" ref={componentRef}>
            <div className='row'>
                <div className='col-9'></div>
                <div className='col-3'>
                    <button onClick={handlePrint} className='btn btn-primary d-print-none mx-6'>print</button>
                </div>
            </div>
            
           <div className="app-let-tag  m-auto px-4 py-5">
                <div className='border-bottom-1 border-dark p-1 py-3'>
                       <h5 className='text-end'>{appdataletter.companyName}</h5>
                       <h6 className='text-end fw-light'>{appdataletter.companyaddress}</h6>
                       <h6 className='text-end fw-light'>{appdataletter.address1}</h6>                     
                </div>
                <div className='text-end py-3 p-2'>
                    <p>{appdataletter.currentdate}</p>
                </div>
                <div className='text-center py-4'>
                    <h5>Appraisal Letter - CONFIDENTIAL</h5>
                </div>
                <div className='my-2'>
                    <p className='fw-semibold'>Dear: {appdataletter.employeename},</p>
                </div>
                <div>
                    <p>Employee ID: {appdataletter.employeeID}.</p>
                </div>
                <div>
                    <p>
                    {appdataletter.companyName}  has and continues to move forward because of your hard work and contribution.
                    {appdataletter.companyName} , as always, stays committed to its people first approach and puts you and your
                    contributions at the forefront.
                    </p>
                </div>
                <div>
                    <p>
                    In continuation to that thought and philosophy, we are taking this opportunity to congratulate and recognise you for
                    your contributions and thank you for all your efforts.
                    </p>
                </div>
                <div>
                    <p>
                    In recognition of your performance and contributions to {appdataletter.companyName}, we are delighted to
                    promote you to {appdataletter.employeedesignation} and revise your Cost to Company to INR {appdataletter.annualctc}, effective from {appdataletter.appraisaldate} The
                    break-down of your CTC is mentioned in Annexure A.
                    </p>
                </div>
                <div className='pt-5'>
                    <p>
                    We wish you tremendous success in the coming years and look forward to your long-term association and contributions
                    to {appdataletter.companyName} .
                    </p>
                </div>
                <div>
                    <small>Best,</small>
                </div>
                <div className='pt-2'>
                    <p className='fw-semibold'>{appdataletter.hrname}<br/> <p>{appdataletter.hrdesignation}</p></p>                 
                </div>
                <div  className='data-lo-print'>           
                <div className='pt-6'>
                    <h4>Annexure A</h4>
                </div>
                <p>This is your expected monthly salary structure.</p>
                <table className='table'>
                    <tr>
                        <th className='px-2'>Salary Component</th>
                        <th className='px-4'>Amount</th>
                    </tr>
                    <tr>
                        <td className='px-2'>Basic Salary </td>
                        <td className='px-4'>5,000</td>
                    </tr>
                    <tr>
                        <td className='px-2'>HRA</td>
                        <td className='px-4'>2,500</td>
                    </tr>
                    <tr>
                        <td className='px-2'>Special Allowance </td>
                        <td className='px-4'>1,500</td>
                    </tr>
                    <tr>
                        <td className='px-2'>LTA</td>
                        <td className='px-4'>1,000</td>
                    </tr>
                    <tr>
                        <th className='px-2'>Total</th>
                        <th className='px-4'>10,000</th>
                    </tr>
                </table>
                <div className='pt-3'>
                    <small>
                    Note: You will receive salary, and all other benefits forming part of your remuneration package subject to, and after,
                    deduction of TDS, PF, ESI and professional taxes in accordance with applicable law.
                    </small>
                </div>
                </div>
           </div>
        </div>  
        </>
    )
}